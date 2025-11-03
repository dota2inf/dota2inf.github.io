import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Play: FC<Props> = ({ ...props }) => {
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
        d="M24.875 13.1005C27.0417 14.3514 27.0417 17.4788 24.875 18.7297L9.875 27.3899C7.70833 28.6409 5 27.0772 5 24.5754L5 7.25485C5 4.753 7.70834 3.18934 9.875 4.44027L24.875 13.1005ZM23.625 16.5646C24.125 16.2759 24.125 15.5543 23.625 15.2656L8.625 6.60533C8.125 6.31665 7.5 6.6775 7.5 7.25485L7.5 24.5754C7.5 25.1527 8.125 25.5136 8.625 25.2249L23.625 16.5646Z"
        fill="#1E202C"
      />
    </svg>
  );
};
