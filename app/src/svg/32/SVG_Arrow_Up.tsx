import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Up: FC<Props> = ({ ...props }) => {
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
        d="M7.03054 11.0989C6.48982 11.6196 6.48982 12.4638 7.03054 12.9845C7.57127 13.5052 8.44796 13.5052 8.98869 12.9845L14.375 7.79765L14.375 27.375C14.375 28.0654 14.9346 28.625 15.625 28.625C16.3154 28.625 16.875 28.0654 16.875 27.375L16.875 7.79765L22.2613 12.9845C22.802 13.5052 23.6787 13.5052 24.2195 12.9845C24.7602 12.4638 24.7602 11.6196 24.2195 11.0989L16.6041 3.76552C16.0633 3.24482 15.1867 3.24482 14.6459 3.76552L7.03054 11.0989Z"
        fill="#1E202C"
      />
    </svg>
  );
};
