import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Loader: FC<Props> = ({ ...props }) => {
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
        d="M2.5 16C2.49992 8.58641 8.3761 2.4997 16.0001 2.5C16.8285 2.50003 17.5 3.17163 17.5 4.00006C17.5 4.82849 16.8284 5.50003 15.9999 5.5C10.0625 5.49977 5.49994 10.2136 5.5 16C5.50006 21.3766 9.76183 26.5 16 26.5C21.8183 26.5 26.5 21.7757 26.5 16C26.5 15.1716 27.1716 14.5 28 14.5C28.8284 14.5 29.5 15.1716 29.5 16C29.5 23.4243 23.4834 29.5 16 29.5C7.93988 29.5 2.50008 22.8634 2.5 16Z"
        fill="#1E202C"
      />
    </svg>
  );
};
