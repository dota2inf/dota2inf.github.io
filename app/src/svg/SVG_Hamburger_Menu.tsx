import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Hamburger_Menu: FC<Props> = ({ ...props }) => {
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
        d="M2.75 8C2.75 7.30964 3.30964 6.75 4 6.75H28C28.6904 6.75 29.25 7.30964 29.25 8C29.25 8.69036 28.6904 9.25 28 9.25H4C3.30964 9.25 2.75 8.69036 2.75 8Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 16C2.75 15.3096 3.30964 14.75 4 14.75H28C28.6904 14.75 29.25 15.3096 29.25 16C29.25 16.6904 28.6904 17.25 28 17.25H4C3.30964 17.25 2.75 16.6904 2.75 16Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.75 24C2.75 23.3096 3.30964 22.75 4 22.75H28C28.6904 22.75 29.25 23.3096 29.25 24C29.25 24.6904 28.6904 25.25 28 25.25H4C3.30964 25.25 2.75 24.6904 2.75 24Z"
        fill="#1E202C"
      />
    </svg>
  );
};
