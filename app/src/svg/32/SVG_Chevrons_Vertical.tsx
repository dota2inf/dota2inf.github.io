import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevrons_Vertical: FC<Props> = ({ ...props }) => {
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
        d="M15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612L20.8839 11.1161C21.372 11.6043 21.372 12.3957 20.8839 12.8839C20.3957 13.372 19.6043 13.372 19.1161 12.8839L16 9.76777L12.8839 12.8839C12.3957 13.372 11.6043 13.372 11.1161 12.8839C10.628 12.3957 10.628 11.6043 11.1161 11.1161L15.1161 7.11612Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8839 24.8839C16.3957 25.372 15.6043 25.372 15.1161 24.8839L11.1161 20.8839C10.628 20.3957 10.628 19.6043 11.1161 19.1161C11.6043 18.628 12.3957 18.628 12.8839 19.1161L16 22.2322L19.1161 19.1161C19.6043 18.628 20.3957 18.628 20.8839 19.1161C21.372 19.6043 21.372 20.3957 20.8839 20.8839L16.8839 24.8839Z"
        fill="#1E202C"
      />
    </svg>
  );
};
