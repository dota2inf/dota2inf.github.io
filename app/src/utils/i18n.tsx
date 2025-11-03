import { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "translate/en";
import { es } from "translate/es";
import { it } from "translate/it";
import { getLocalStorage, setLocalStorage } from "./utils";

// Add new language to "const LANGUAGES" and to init18n
export const LANGUAGES = {
  en: {
    label: "English",
    value: "en",
    library: en,
    request: "english",
  },
  es: {
    label: "Español",
    value: "es",
    library: es,
    request: "spanish",
  },
  it: {
    label: "Italiano",
    value: "it",
    library: it,
    request: "italian",
  },
};
export function getLanguages() {
  return Object.values(LANGUAGES);
}

export const LOCAL_STORAGE_KEY = "language";

export function init18n() {
  const currentLang = getLocalStorage(LOCAL_STORAGE_KEY) || "en";
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: LANGUAGES.en.library,
      },
      es: {
        translation: LANGUAGES.es.library,
      },
      it: {
        translation: LANGUAGES.it.library,
      },
    },
    lng: currentLang,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
}

export function customChangeLanguage(lang) {
  i18n.changeLanguage(lang);
  setLocalStorage(LOCAL_STORAGE_KEY, lang);
  window.dispatchEvent(new Event(`${LOCAL_STORAGE_KEY}_changed`));
}

/**
 * get language from localstorage for request - english / spanish / italian
 */
export function getStringLanguage() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const value = raw ? JSON.parse(raw) : "en";
    const requestLang = LANGUAGES[value]?.request;
    console.log("requestLang", requestLang);
    return requestLang || LANGUAGES.en.request;
  } catch (err) {
    console.warn(`getLocalStorage-${err}`);
    return LANGUAGES.en.request;
  }
}

/**
 * rerender if localstorage changed
 */

export function useLangChanged() {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      return stored !== null ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const updateValue = () => {
      console.log("--+ WORKS? 1");
      try {
        const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
        setValue(stored !== null ? JSON.parse(stored) : null);
      } catch {
        setValue(null);
      }
    };

    const handleStorageChange = (event) => {
      if (event.key === LOCAL_STORAGE_KEY) {
        updateValue();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener(`${LOCAL_STORAGE_KEY}_changed`, updateValue);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener(`${LOCAL_STORAGE_KEY}_changed`, updateValue);
    };
  }, []);

  return value;
}
