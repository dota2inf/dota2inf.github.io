import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Prev_Frame: FC<Props> = ({ ...props }) => {
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
        d="M13.2972 15.1086L24.5067 5.20319C25.4751 4.34754 27 5.03502 27 6.32722V25.7571C27 27.0356 25.503 27.7281 24.5287 26.9002L13.3192 17.3758C12.6231 16.7844 12.6127 15.7134 13.2972 15.1086Z"
        fill="#1E202C"
      />
      <path
        d="M10 25V7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7V25C6 26.1046 6.89543 27 8 27C9.10457 27 10 26.1046 10 25Z"
        fill="#1E202C"
      />
    </svg>
  );
};
