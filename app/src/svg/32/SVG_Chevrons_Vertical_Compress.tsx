import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevrons_Vertical_Compress: FC<Props> = ({ ...props }) => {
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
        d="M16.8839 12.8839C16.3957 13.372 15.6043 13.372 15.1161 12.8839L11.1161 8.88388C10.628 8.39573 10.628 7.60427 11.1161 7.11612C11.6043 6.62796 12.3957 6.62796 12.8839 7.11612L16 10.2322L19.1161 7.11612C19.6043 6.62796 20.3957 6.62796 20.8839 7.11612C21.372 7.60427 21.372 8.39573 20.8839 8.88388L16.8839 12.8839Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1161 19.1161C15.6043 18.628 16.3957 18.628 16.8839 19.1161L20.8839 23.1161C21.372 23.6043 21.372 24.3957 20.8839 24.8839C20.3957 25.372 19.6043 25.372 19.1161 24.8839L16 21.7678L12.8839 24.8839C12.3957 25.372 11.6043 25.372 11.1161 24.8839C10.628 24.3957 10.628 23.6043 11.1161 23.1161L15.1161 19.1161Z"
        fill="#1E202C"
      />
    </svg>
  );
};
