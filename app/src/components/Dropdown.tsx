import { useState, useRef, useEffect, type ReactNode, type FC } from "react";
import { clsx } from "clsx";
import "./Dropdown.scss";

type DropdownProps = {
  style?: any;
  button: ReactNode;
  content: (close: () => void) => ReactNode;
  className?: string;
};

export const Dropdown: FC<DropdownProps> = ({
  button,
  style,
  content,
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setOpen((prev) => !prev);
  const closeDropdown = () => setOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className={clsx("component_Dropdown_wrapper", "no_select", className)} style={style}>
      <div
        ref={buttonRef}
        onClick={toggleDropdown}
        className="component_Dropdown_button"
      >
        {button}
      </div>

      {open && (
        <div ref={dropdownRef} className="component_Dropdown_content">
          {content(closeDropdown)}
        </div>
      )}
    </div>
  );
};
