import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Credit_Card: FC<Props> = ({ ...props }) => {
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
        d="M10 17.75C9.30964 17.75 8.75 18.3096 8.75 19C8.75 19.6904 9.30964 20.25 10 20.25H14C14.6904 20.25 15.25 19.6904 15.25 19C15.25 18.3096 14.6904 17.75 14 17.75H10Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 6C4.79086 6 3 7.79086 3 10V22C3 24.2091 4.79086 26 7 26H25C27.2091 26 29 24.2091 29 22V10C29 7.79086 27.2091 6 25 6H7ZM25 8.5H7C6.17157 8.5 5.5 9.17157 5.5 10V11H26.5V10C26.5 9.17157 25.8284 8.5 25 8.5ZM5.5 22V15H26.5V22C26.5 22.8284 25.8284 23.5 25 23.5H7C6.17157 23.5 5.5 22.8284 5.5 22Z"
        fill="#1E202C"
      />
    </svg>
  );
};
