import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Subtract: FC<Props> = ({ ...props }) => {
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
        d="M6.66671 14.6667C5.93033 14.6667 5.33337 15.2637 5.33337 16.0001C5.33337 16.7365 5.93033 17.3334 6.66671 17.3334C17.8752 17.3334 13.3028 17.3334 25.3334 17.3334C26.0698 17.3334 26.6667 16.7365 26.6667 16.0001C26.6667 15.2637 26.0698 14.6667 25.3334 14.6667C13.3028 14.6667 17.8752 14.6667 6.66671 14.6667Z"
        fill="#1E202C"
      />
    </svg>
  );
};
