import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Double_Chevron_Left: FC<Props> = ({ ...props }) => {
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
        d="M16.6095 23.943C16.0888 24.4637 15.2446 24.4637 14.7239 23.943L7.39052 16.6096C6.86983 16.0889 6.86983 15.2447 7.39052 14.724L14.7239 7.39069C15.2446 6.86999 16.0888 6.86999 16.6095 7.39069C17.1302 7.91139 17.1302 8.75561 16.6095 9.27631L10.219 15.6668L16.6095 22.0574C17.1302 22.5781 17.1302 23.4223 16.6095 23.943Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.276 23.943C23.7553 24.4637 22.9111 24.4637 22.3904 23.943L15.057 16.6096C14.5363 16.0889 14.5363 15.2447 15.057 14.724L22.3904 7.39069C22.9111 6.86999 23.7553 6.86999 24.276 7.39069C24.7967 7.91139 24.7967 8.75561 24.276 9.27631L17.8855 15.6668L24.276 22.0574C24.7967 22.5781 24.7967 23.4223 24.276 23.943Z"
        fill="#1E202C"
      />
    </svg>
  );
};
