import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Card_File: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3C2.79086 3 1 4.79086 1 7V25C1 27.2091 2.79086 29 5 29H15C16.8638 29 18.4299 27.7252 18.874 26H22C23.8638 26 25.4299 24.7252 25.874 23H27C29.2091 23 31 21.2091 31 19V13C31 10.7909 29.2091 9 27 9H25.874C25.4299 7.27477 23.8638 6 22 6H18.874C18.4299 4.27477 16.8638 3 15 3H5ZM15 5.5H5C4.17157 5.5 3.5 6.17157 3.5 7V25C3.5 25.8284 4.17157 26.5 5 26.5H15C15.8284 26.5 16.5 25.8284 16.5 25V7C16.5 6.17157 15.8284 5.5 15 5.5ZM26 11.5V20.5H27C27.8284 20.5 28.5 19.8284 28.5 19V13C28.5 12.1716 27.8284 11.5 27 11.5H26ZM22 23.5H19V8.5H22C22.8284 8.5 23.5 9.17157 23.5 10V22C23.5 22.8284 22.8284 23.5 22 23.5Z"
        fill="#1E202C"
      />
    </svg>
  );
};
