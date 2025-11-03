import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Pause: FC<Props> = ({ ...props }) => {
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
        d="M4 7C4 4.79086 5.79086 3 8 3H10C12.2091 3 14 4.79086 14 7V25C14 27.2091 12.2091 29 10 29H8C5.79086 29 4 27.2091 4 25V7ZM8 5.5H10C10.8284 5.5 11.5 6.17157 11.5 7V25C11.5 25.8284 10.8284 26.5 10 26.5H8C7.17157 26.5 6.5 25.8284 6.5 25V7C6.5 6.17157 7.17157 5.5 8 5.5Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7C18 4.79086 19.7909 3 22 3H24C26.2091 3 28 4.79086 28 7V25C28 27.2091 26.2091 29 24 29H22C19.7909 29 18 27.2091 18 25V7ZM22 5.5H24C24.8284 5.5 25.5 6.17157 25.5 7V25C25.5 25.8284 24.8284 26.5 24 26.5H22C21.1716 26.5 20.5 25.8284 20.5 25V7C20.5 6.17157 21.1716 5.5 22 5.5Z"
        fill="#1E202C"
      />
    </svg>
  );
};
