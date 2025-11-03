import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Add: FC<Props> = ({ ...props }) => {
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
        d="M17.3333 6.66683C17.3333 5.93045 16.7363 5.3335 15.9999 5.3335C15.2635 5.3335 14.6666 5.93045 14.6666 6.66683V14.6668H6.66659C5.9302 14.6668 5.33325 15.2638 5.33325 16.0002C5.33325 16.7365 5.9302 17.3335 6.66659 17.3335H14.6666V25.3335C14.6666 26.0699 15.2635 26.6668 15.9999 26.6668C16.7363 26.6668 17.3333 26.0699 17.3333 25.3335V17.3335H25.3333C26.0696 17.3335 26.6666 16.7365 26.6666 16.0002C26.6666 15.2638 26.0696 14.6668 25.3333 14.6668H17.3333V6.66683Z"
        fill="#1E202C"
      />
    </svg>
  );
};
