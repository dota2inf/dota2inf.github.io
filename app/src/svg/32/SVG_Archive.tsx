import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Archive: FC<Props> = ({ ...props }) => {
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
        d="M13.3333 14.6667C12.5969 14.6667 12 15.2636 12 16C12 16.7364 12.5969 17.3333 13.3333 17.3333H18.6666C19.403 17.3333 20 16.7364 20 16C20 15.2636 19.403 14.6667 18.6666 14.6667H13.3333Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66663 12H3.99996V25.3333C3.99996 26.8061 5.19387 28 6.66663 28H25.3333C26.8061 28 28 26.8061 28 25.3333V12H29.3333V6.66667C29.3333 5.19391 28.1394 4 26.6666 4H5.33329C3.86053 4 2.66663 5.19391 2.66663 6.66667V12ZM26.6666 6.66667H5.33329V9.33333H26.6666V6.66667ZM6.66663 12H25.3333V25.3333H6.66663V12Z"
        fill="#1E202C"
      />
    </svg>
  );
};
