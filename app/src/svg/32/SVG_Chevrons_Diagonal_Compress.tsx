import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevrons_Diagonal_Compress: FC<Props> = ({ ...props }) => {
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
        d="M18.8283 14.4216C18.138 14.4216 17.5783 13.862 17.5783 13.1716V7.51477C17.5783 6.82442 18.138 6.26477 18.8283 6.26477C19.5187 6.26477 20.0783 6.82442 20.0783 7.51477V11.9216H24.4852C25.1755 11.9216 25.7352 12.4813 25.7352 13.1716C25.7352 13.862 25.1755 14.4216 24.4852 14.4216H18.8283Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.1717 17.5784C13.862 17.5784 14.4217 18.138 14.4217 18.8284L14.4217 24.4852C14.4217 25.1756 13.862 25.7352 13.1717 25.7352C12.4813 25.7352 11.9217 25.1756 11.9217 24.4852L11.9217 20.0784L7.51483 20.0784C6.82448 20.0784 6.26483 19.5187 6.26483 18.8284C6.26483 18.138 6.82448 17.5784 7.51483 17.5784L13.1717 17.5784Z"
        fill="#1E202C"
      />
    </svg>
  );
};
