import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Sub_Right: FC<Props> = ({ ...props }) => {
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
        d="M7.5 7.25C7.5 6.55964 6.94036 6 6.25 6C5.55964 6 5 6.55964 5 7.25V14.25C5 17.1495 7.35051 19.5 10.25 19.5H22.2322L18.3661 23.3661C17.878 23.8543 17.878 24.6457 18.3661 25.1339C18.8543 25.622 19.6457 25.622 20.1339 25.1339L26.1339 19.1339C26.622 18.6457 26.622 17.8543 26.1339 17.3661L20.1339 11.3661C19.6457 10.878 18.8543 10.878 18.3661 11.3661C17.878 11.8543 17.878 12.6457 18.3661 13.1339L22.2322 17H10.25C8.73122 17 7.5 15.7688 7.5 14.25V7.25Z"
        fill="#1E202C"
      />
    </svg>
  );
};
