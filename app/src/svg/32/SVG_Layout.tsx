import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Layout: FC<Props> = ({ ...props }) => {
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
        d="M7 3C4.79086 3 3 4.79086 3 7V25C3 27.2091 4.79086 29 7 29H25C27.2091 29 29 27.2091 29 25V7C29 4.79086 27.2091 3 25 3H7ZM25 5.5H7C6.17157 5.5 5.5 6.17157 5.5 7V8.75H26.5V7C26.5 6.17157 25.8284 5.5 25 5.5ZM5.5 25V11.25H10.75L10.75 26.5H7C6.17157 26.5 5.5 25.8284 5.5 25ZM13.25 26.5H25C25.8284 26.5 26.5 25.8284 26.5 25V11.25H13.25L13.25 26.5Z"
        fill="#1E202C"
      />
    </svg>
  );
};
