import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Next_Frame: FC<Props> = ({ ...props }) => {
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
        d="M19.7028 15.1086L8.49326 5.20319C7.52495 4.34754 6 5.03502 6 6.32722V25.7571C6 27.0356 7.49697 27.7281 8.47126 26.9002L19.6808 17.3758C20.3769 16.7844 20.3873 15.7134 19.7028 15.1086Z"
        fill="#1E202C"
      />
      <path
        d="M23 25V7C23 5.89543 23.8954 5 25 5C26.1046 5 27 5.89543 27 7V25C27 26.1046 26.1046 27 25 27C23.8954 27 23 26.1046 23 25Z"
        fill="#1E202C"
      />
    </svg>
  );
};
