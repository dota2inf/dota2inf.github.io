import { useState, useRef, useEffect, type FC } from "react";
import "./DropdownSelect.scss";
import { clsx } from "clsx";
import { useTranslation } from "react-i18next";
type dataType = {
  label: string;
  value: string;
};

type DropdownSelectProps = {
  data: dataType[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (selected: dataType) => void;
};

export const DropdownSelect: FC<DropdownSelectProps> = ({
  className,
  data,
  value,
  defaultValue,
  onChange,
}) => {
  const { t } = useTranslation();
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue ?? data[0]?.value
  );
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const selected = data.find((it) => it.value === currentValue) ?? data[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (it: dataType) => {
    if (value === undefined) {
      setInternalValue(it.value);
    }
    setOpen(false);
    onChange?.(it);
  };

  return (
    <div className={clsx("component_DropdownSelect", className)} ref={dropdownRef}>
      <div
        className="component_DropdownSelect_button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className="component_DropdownSelect_text1">{t('lang')}</div>
        <div className="component_DropdownSelect_text2">{selected?.label}</div>
  
      </div>

      {open && (
        <div className="component_DropdownSelect_menu">
          {data.map((it) => (
            <div
              key={it.value}
              className={clsx(
                "component_DropdownSelect_listItem",
                selected?.value === it.value && "component_DropdownSelect_selected"
              )}
              onClick={() => handleSelect(it)}
            >
              {it.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
