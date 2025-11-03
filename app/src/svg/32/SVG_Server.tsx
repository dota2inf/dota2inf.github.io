import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Server: FC<Props> = ({ ...props }) => {
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
        d="M20 10.75C20 10.0596 20.5596 9.5 21.25 9.5H22.75C23.4404 9.5 24 10.0596 24 10.75C24 11.4404 23.4404 12 22.75 12H21.25C20.5596 12 20 11.4404 20 10.75Z"
        fill="#1E202C"
      />
      <path
        d="M21.25 20.5C20.5596 20.5 20 21.0596 20 21.75C20 22.4404 20.5596 23 21.25 23H22.75C23.4404 23 24 22.4404 24 21.75C24 21.0596 23.4404 20.5 22.75 20.5H21.25Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 7C3 4.79086 4.79086 3 7 3H25C27.2091 3 29 4.79086 29 7V25C29 27.2091 27.2091 29 25 29H7C4.79086 29 3 27.2091 3 25V7ZM7 5.5H25C25.8284 5.5 26.5 6.17157 26.5 7V14.5H5.5V7C5.5 6.17157 6.17157 5.5 7 5.5ZM5.5 17V25C5.5 25.8284 6.17157 26.5 7 26.5H25C25.8284 26.5 26.5 25.8284 26.5 25V17H5.5Z"
        fill="#1E202C"
      />
    </svg>
  );
};
