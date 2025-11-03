/* eslint-disable react-refresh/only-export-components */
import {
  useState,
  useEffect,
  useCallback,
  type ComponentType,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

type ModalComponent<T = any, P = object> = ComponentType<
  P & { onClose: (result: T | null) => void }
>;

type ModalEntry = {
  element: ReactNode;
  resolve: (value: any) => void;
};

let _openModal:
  | (<T, P>(params: {
      Component: ModalComponent<T, P>;
      props: P;
      resolve: (value: T | null) => void;
    }) => void)
  | null = null;

export function useModal() {
  return useCallback(function openModal<T, P = object>(
    Component: ModalComponent<T, P>,
    props?: P,
  ): Promise<T | null> {
    return new Promise((resolve) => {
      if (_openModal) {
        _openModal({ Component, props: props || ({} as P), resolve });
      }
    });
  }, []);
}

export function Modal() {
  const [modalStack, setModalStack] = useState<ModalEntry[]>([]);
  useEffect(() => {
    _openModal = function open<T, P>({
      Component,
      props,
      resolve,
    }: {
      Component: ModalComponent<T, P>;
      props: P;
      resolve: (value: T | null) => void;
    }) {
      const handleClose = (result: T | null) => {
        setModalStack((stack) => {
          const [, ...rest] = stack.slice().reverse();
          const newStack = rest.reverse();
          resolve(result);
          return newStack;
        });
      };

      const modalElement = <Component {...props} onClose={handleClose} />;

      setModalStack((stack) => [...stack, { element: modalElement, resolve }]);
    };
  }, []);

  if (modalStack.length === 0) return null;

  const currentModal = modalStack[modalStack.length - 1].element;

  return createPortal(
    <div className="modal">{currentModal}</div>,
    document.body,
  );
}
