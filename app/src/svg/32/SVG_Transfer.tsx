import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Transfer: FC<Props> = ({ ...props }) => {
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
        d="M13.3839 4.11612C13.8721 4.60427 13.8721 5.39573 13.3839 5.88388L8.0178 11.25H26.5C27.1904 11.25 27.75 11.8096 27.75 12.5C27.75 13.1904 27.1904 13.75 26.5 13.75H5.00004C4.49446 13.75 4.03866 13.4454 3.84519 12.9784C3.65171 12.5113 3.75866 11.9736 4.11615 11.6161L11.6162 4.11612C12.1043 3.62796 12.8958 3.62796 13.3839 4.11612Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1162 28.3839C17.628 27.8957 17.628 27.1043 18.1162 26.6161L23.4823 21.25H5.00004C4.30968 21.25 3.75004 20.6904 3.75004 20C3.75004 19.3096 4.30968 18.75 5.00004 18.75H26.5C27.0056 18.75 27.4614 19.0546 27.6549 19.5216C27.8484 19.9887 27.7414 20.5264 27.3839 20.8839L19.8839 28.3839C19.3958 28.872 18.6043 28.872 18.1162 28.3839Z"
        fill="#1E202C"
      />
    </svg>
  );
};
