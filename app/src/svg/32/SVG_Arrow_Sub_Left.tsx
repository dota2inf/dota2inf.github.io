import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Sub_Left: FC<Props> = ({ ...props }) => {
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
        d="M24 7.25C24 6.55964 24.5596 6 25.25 6C25.9404 6 26.5 6.55964 26.5 7.25V14.25C26.5 17.1495 24.1495 19.5 21.25 19.5H9.26777L13.1339 23.3661C13.622 23.8543 13.622 24.6457 13.1339 25.1339C12.6457 25.622 11.8543 25.622 11.3661 25.1339L5.36612 19.1339C4.87796 18.6457 4.87796 17.8543 5.36612 17.3661L11.3661 11.3661C11.8543 10.878 12.6457 10.878 13.1339 11.3661C13.622 11.8543 13.622 12.6457 13.1339 13.1339L9.26777 17H21.25C22.7688 17 24 15.7688 24 14.25V7.25Z"
        fill="#1E202C"
      />
    </svg>
  );
};
