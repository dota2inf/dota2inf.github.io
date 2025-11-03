import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevrons_Horizontal: FC<Props> = ({ ...props }) => {
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
        d="M24.8839 15.1161C25.372 15.6043 25.372 16.3957 24.8839 16.8839L20.8839 20.8839C20.3957 21.372 19.6043 21.372 19.1161 20.8839C18.628 20.3957 18.628 19.6043 19.1161 19.1161L22.2322 16L19.1161 12.8839C18.628 12.3957 18.628 11.6043 19.1161 11.1161C19.6043 10.628 20.3957 10.628 20.8839 11.1161L24.8839 15.1161Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L11.1161 11.1161C11.6043 10.628 12.3957 10.628 12.8839 11.1161C13.372 11.6043 13.372 12.3957 12.8839 12.8839L9.76777 16L12.8839 19.1161C13.372 19.6043 13.372 20.3957 12.8839 20.8839C12.3957 21.372 11.6043 21.372 11.1161 20.8839L7.11612 16.8839Z"
        fill="#1E202C"
      />
    </svg>
  );
};
