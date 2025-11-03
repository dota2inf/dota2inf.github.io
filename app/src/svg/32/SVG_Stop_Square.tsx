import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Stop_Square: FC<Props> = ({ ...props }) => {
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
        d="M3 7C3 4.79086 4.79086 3 7 3H25C27.2091 3 29 4.79086 29 7V25C29 27.2091 27.2091 29 25 29H7C4.79086 29 3 27.2091 3 25V7ZM7 5.5H25C25.8284 5.5 26.5 6.17157 26.5 7V25C26.5 25.8284 25.8284 26.5 25 26.5H7C6.17157 26.5 5.5 25.8284 5.5 25V7C5.5 6.17157 6.17157 5.5 7 5.5Z"
        fill="#1E202C"
      />
    </svg>
  );
};
