import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevron_Left: FC<Props> = ({ ...props }) => {
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
        d="M19.9428 24.2762C19.4222 24.7969 18.5779 24.7969 18.0572 24.2762L10.7239 16.9429C10.2032 16.4222 10.2032 15.578 10.7239 15.0573L18.0572 7.72394C18.5779 7.20324 19.4222 7.20324 19.9429 7.72394C20.4636 8.24464 20.4636 9.08886 19.9429 9.60956L13.5523 16.0001L19.9428 22.3906C20.4635 22.9113 20.4635 23.7555 19.9428 24.2762Z"
        fill="#1E202C"
      />
    </svg>
  );
};
