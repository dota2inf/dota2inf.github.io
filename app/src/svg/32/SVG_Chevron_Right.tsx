import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevron_Right: FC<Props> = ({ ...props }) => {
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
        d="M11.7239 7.72378C12.2446 7.20308 13.0888 7.20308 13.6095 7.72378L20.9429 15.0571C21.4635 15.5778 21.4635 16.422 20.9429 16.9427L13.6095 24.2761C13.0888 24.7968 12.2446 24.7968 11.7239 24.2761C11.2032 23.7554 11.2032 22.9111 11.7239 22.3904L18.1144 15.9999L11.7239 9.60939C11.2032 9.0887 11.2032 8.24448 11.7239 7.72378Z"
        fill="#1E202C"
      />
    </svg>
  );
};
