import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Down: FC<Props> = ({ ...props }) => {
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
        d="M24.2195 20.9011C24.7602 20.3804 24.7602 19.5362 24.2195 19.0155C23.6787 18.4948 22.802 18.4948 22.2613 19.0155L16.875 24.2023L16.875 4.625C16.875 3.93464 16.3154 3.375 15.625 3.375C14.9346 3.375 14.375 3.93464 14.375 4.625L14.375 24.2023L8.98868 19.0155C8.44796 18.4948 7.57127 18.4948 7.03054 19.0155C6.48982 19.5362 6.48982 20.3804 7.03054 20.9011L14.6459 28.2345C15.1867 28.7552 16.0633 28.7552 16.6041 28.2345L24.2195 20.9011Z"
        fill="#1E202C"
      />
    </svg>
  );
};
