import { useEffect, useState, type ReactNode } from "react";
import { createRoot } from "react-dom/client";

import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import { t } from "i18next";

/**
 * useState in localstorage
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      try {
        return JSON.parse(jsonValue);
      } catch (e) {
        console.error(e);
      }
    }

    if (typeof initialValue === "function") {
      return initialValue();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

/**
 * get from local-storage by key
 */
export function getLocalStorage(key: string) {
  try {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      return null;
    }
  } catch (err) {
    console.warn(`getLocalStorage-${err}`);
  }
}

/**
 * set in local-storage data (in string type) by key
 */
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

/**
 * time -> 18.02.2021
 */

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

/**
 * component Button prop-submitByEnter register last "enter"  (so we can open modal or confrim windows)
 */
type SubmitCallback = () => void;

class SubmitByEnterManager {
  private stack: SubmitCallback[] = [];

  constructor() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      const topCallback = this.stack[this.stack.length - 1];
      topCallback?.();
    }
  };

  register(callback: SubmitCallback) {
    this.stack.push(callback);
  }

  unregister(callback: SubmitCallback) {
    this.stack = this.stack.filter((cb) => cb !== callback);
  }
}

export const submitByEnterManager = new SubmitByEnterManager();

/**
 * requestWrap - used for requests
 * TODO rewrite to promises style
 */

type RequestWrapPropsQueryParam = {
  key: string;
  value: string | number | boolean;
};

type RequestWrapProps = <T = void>(
  url: string,
  body: RequestInit,
  queryParams?: RequestWrapPropsQueryParam[] | null,
  responseHandler?: (data: any, response: Response | null, status: number) => T,
  disableErrorToast?: boolean | any[],
) => Promise<T | undefined>;

// const baseUrl = import.meta.env.DEV ? `https://${window.location.hostname}:8030` : `${window.location.origin}`;
const baseUrl = "";

export const requestWrap: RequestWrapProps = async (
  url,
  body,
  queryParams = [],
  responseHandler,
  disableErrorToast,
) => {
  const searchParams = new URLSearchParams();
  for (const { key, value } of queryParams || []) {
    searchParams.append(key, String(value));
  }

  const queryString = searchParams.toString();
  const correctUrl = `${baseUrl}${url}${queryString ? `?${queryString}` : ""}`;

  try {
    console.log("correctUrl", correctUrl);
    console.log("correctUrl", body);
    const response = await fetch(correctUrl, body);

    const status = response.status;
    const json = await response.json();

    if (!response.ok) {
      throw { json, status, response };
    }

    return responseHandler
      ? responseHandler(json, response, status)
      : undefined;
  } catch (error: any) {
    console.log("--+ requestWrap ERROR", error);

    if (
      Array.isArray(disableErrorToast) &&
      disableErrorToast.includes(error.status)
    ) {
      console.log("--+ disableErrorToast ARR no-TOAST 1");
    } else if (disableErrorToast !== true) {
      console.log("--+ disableErrorToast boolean no-TOAST 2");
      if (
        error?.json?.detail === t("toast_error_tokenNotFound") ||
        error?.json?.detail === t("toast_error_tokenRevoked")
      ) {
        toast.error(`${error.status} ${error?.json?.detail}`);
      } else if (typeof error?.json?.detail === "string") {
        toast.error(`${error.status} ${error?.json?.detail}`);
      } else if (typeof error?.json === "string") {
        toast.error(`${error.status} ${error?.json}`);
      } else {
        toast.error(`${error.status} ${t("toast_error_unknownError")}`);
      }
    }

    console.error("Fetch error:", error.json);

    return responseHandler
      ? responseHandler(error.json, error.response, error.status)
      : undefined;
  }
};

/**
 * openConfirm
 *
 */

const styles: { [key: string]: React.CSSProperties } = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10000,
    padding: "16px",
  },
  modal: {
    background: "#fff",
    padding: "24px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    maxHeight: "90vh",
    overflowY: "auto",
  },
};

interface InternalConfirmModalProps {
  children: ReactNode;
  onClose: () => void;
}

export function openConfirm<T = any>(
  render: (e: { close: (result?: T) => void }) => React.ReactNode,
): Promise<T | undefined> {
  const InternalConfirmModal: React.FC<InternalConfirmModalProps> = ({
    children,
    onClose,
  }) => {
    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handler);
      return () => window.removeEventListener("keydown", handler);
    }, [onClose]);

    const rootDiv = document.getElementById("root");
    if (!rootDiv) {
      throw new Error('Element with id="root" not found');
    }

    return createPortal(
      <div
        style={styles.overlay}
        // Backdrop
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        <div style={styles.modal}>{children}</div>
      </div>,
      rootDiv,
    );
  };

  const rootDiv = document.getElementById("root");
  if (!rootDiv) throw new Error("Element with id 'root' not found");

  const modalContainer = document.createElement("div");
  rootDiv.appendChild(modalContainer);
  const root = createRoot(modalContainer);

  return new Promise<T | undefined>((resolve) => {
    const close = (result?: T) => {
      root.unmount();
      rootDiv.removeChild(modalContainer);
      resolve(result);
    };

    root.render(
      <InternalConfirmModal onClose={() => close(undefined)}>
        {render({ close })}
      </InternalConfirmModal>,
    );
  });
}
