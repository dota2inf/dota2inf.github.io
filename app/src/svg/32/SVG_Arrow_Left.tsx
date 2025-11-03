import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Left: FC<Props> = ({ ...props }) => {
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
        d="M10.7239 24.5945C11.2446 25.1352 12.0888 25.1352 12.6095 24.5945C13.1302 24.0537 13.1302 23.177 12.6095 22.6363L7.42265 17.25L27 17.25C27.6904 17.25 28.25 16.6904 28.25 16C28.25 15.3096 27.6904 14.75 27 14.75L7.42266 14.75L12.6095 9.36368C13.1302 8.82296 13.1302 7.94627 12.6095 7.40554C12.0888 6.86482 11.2446 6.86482 10.7239 7.40554L3.39052 15.0209C2.86983 15.5617 2.86983 16.4383 3.39052 16.9791L10.7239 24.5945Z"
        fill="#1E202C"
      />
    </svg>
  );
};
