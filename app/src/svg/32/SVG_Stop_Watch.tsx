import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Stop_Watch: FC<Props> = ({ ...props }) => {
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
        d="M16 27.75C21.2467 27.75 25.5 23.4967 25.5 18.25C25.5 13.0033 21.2467 8.75 16 8.75C10.7533 8.75 6.5 13.0033 6.5 18.25C6.5 23.4967 10.7533 27.75 16 27.75ZM16 30.25C22.6274 30.25 28 24.8774 28 18.25C28 11.6226 22.6274 6.25 16 6.25C9.37258 6.25 4 11.6226 4 18.25C4 24.8774 9.37258 30.25 16 30.25Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.75 18.5V12.25C14.75 11.5596 15.3096 11 16 11C16.6904 11 17.25 11.5596 17.25 12.25V18.5C17.25 19.1904 16.6904 19.75 16 19.75C15.3096 19.75 14.75 19.1904 14.75 18.5Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.25 3.25C20.25 3.94036 19.6904 4.5 19 4.5L13 4.5C12.3096 4.5 11.75 3.94036 11.75 3.25C11.75 2.55964 12.3096 2 13 2L19 2C19.6904 2 20.25 2.55964 20.25 3.25Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.8839 6.36611L27.8839 7.36611C28.372 7.85427 28.372 8.64572 27.8839 9.13388C27.3957 9.62203 26.6043 9.62203 26.1161 9.13388L25.1161 8.13388C24.628 7.64572 24.628 6.85427 25.1161 6.36611C25.6043 5.87796 26.3957 5.87796 26.8839 6.36611Z"
        fill="#1E202C"
      />
    </svg>
  );
};
