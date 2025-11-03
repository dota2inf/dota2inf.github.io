import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevron_Down: FC<Props> = ({ ...props }) => {
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
        d="M23.9428 12.3905C24.4635 12.9112 24.4635 13.7554 23.9428 14.2761L16.6095 21.6095C16.0888 22.1302 15.2446 22.1302 14.7239 21.6095L7.39057 14.2761C6.86987 13.7554 6.86987 12.9112 7.39057 12.3905C7.91126 11.8698 8.75549 11.8698 9.27618 12.3905L15.6667 18.781L22.0572 12.3905C22.5779 11.8698 23.4222 11.8698 23.9428 12.3905Z"
        fill="#1E202C"
      />
    </svg>
  );
};
