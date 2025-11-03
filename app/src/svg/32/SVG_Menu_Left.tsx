import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Menu_Left: FC<Props> = ({ ...props }) => {
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
        d="M2.75 12C2.75 11.3096 3.30964 10.75 4 10.75H28C28.6904 10.75 29.25 11.3096 29.25 12C29.25 12.6904 28.6904 13.25 28 13.25H4C3.30964 13.25 2.75 12.6904 2.75 12Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 20C2.75 19.3096 3.30964 18.75 4 18.75H23C23.6904 18.75 24.25 19.3096 24.25 20C24.25 20.6904 23.6904 21.25 23 21.25H4C3.30964 21.25 2.75 20.6904 2.75 20Z"
        fill="#1E202C"
      />
    </svg>
  );
};
