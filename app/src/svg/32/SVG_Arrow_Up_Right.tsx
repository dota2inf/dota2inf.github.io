import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Up_Right: FC<Props> = ({ ...props }) => {
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
        d="M13.0133 6.45728C12.2628 6.44312 11.6658 7.04007 11.68 7.79061C11.6941 8.54115 12.3141 9.16107 13.0646 9.17523L20.5409 9.31629L6.69766 23.1596C6.2095 23.6477 6.2095 24.4392 6.69766 24.9273C7.18582 25.4155 7.97727 25.4155 8.46543 24.9273L22.3087 11.0841L22.4498 18.5604C22.4639 19.3109 23.0838 19.9308 23.8344 19.945C24.5849 19.9592 25.1819 19.3622 25.1677 18.6117L24.9683 8.04133C24.9541 7.29079 24.3342 6.67088 23.5837 6.65672L13.0133 6.45728Z"
        fill="#1E202C"
      />
    </svg>
  );
};
