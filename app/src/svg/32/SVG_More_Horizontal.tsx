import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_More_Horizontal: FC<Props> = ({ ...props }) => {
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
        d="M9 16C9 17.6569 7.65685 19 6 19C4.34315 19 3 17.6569 3 16C3 14.3431 4.34315 13 6 13C7.65685 13 9 14.3431 9 16Z"
        fill="#1E202C"
      />
      <path
        d="M19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z"
        fill="#1E202C"
      />
      <path
        d="M26 19C27.6569 19 29 17.6569 29 16C29 14.3431 27.6569 13 26 13C24.3431 13 23 14.3431 23 16C23 17.6569 24.3431 19 26 19Z"
        fill="#1E202C"
      />
    </svg>
  );
};
