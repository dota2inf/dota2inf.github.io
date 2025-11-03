import { useState, useEffect } from "react";
import { DropdownSelect } from "./DropdownSelect";
import { customChangeLanguage, getLanguages, LOCAL_STORAGE_KEY } from "utils/i18n";
import { getLocalStorage, setLocalStorage } from "utils/utils";

export const DropdownSelectLanguages = () => {
  const [lang, setLang] = useState(() => getLocalStorage(LOCAL_STORAGE_KEY));

  const handleChange = (it: { value: string }) => {
    setLang(it.value);
    setLocalStorage(LOCAL_STORAGE_KEY, it.value);
    customChangeLanguage(it.value);
    
  };

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === LOCAL_STORAGE_KEY && e.newValue) {
        setLang(e.newValue);
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <DropdownSelect
      value={lang}
      onChange={handleChange}
      data={getLanguages()}
    />
  );
};
