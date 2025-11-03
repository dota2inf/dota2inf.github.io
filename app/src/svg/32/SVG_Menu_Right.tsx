import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Menu_Right: FC<Props> = ({ ...props }) => {
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
        d="M7.75 20C7.75 19.3096 8.30964 18.75 9 18.75H28C28.6904 18.75 29.25 19.3096 29.25 20C29.25 20.6904 28.6904 21.25 28 21.25H9C8.30964 21.25 7.75 20.6904 7.75 20Z"
        fill="#1E202C"
      />
    </svg>
  );
};
