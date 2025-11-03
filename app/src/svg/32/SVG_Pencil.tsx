import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Pencil: FC<Props> = ({ ...props }) => {
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
        d="M21.7516 12.6471L19.866 10.7615L8.33521 22.2923L7.42877 25.0843L10.2208 24.1779L21.7516 12.6471ZM11.6535 26.5165L3.27734 29.2358L5.99665 20.8596L19.866 6.99028L25.5228 12.6471L11.6535 26.5165Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.4085 3.21904C26.3671 2.17764 24.6786 2.17764 23.6373 3.21904L21.7516 5.10465L27.4085 10.7615L29.2941 8.87589C30.3355 7.83449 30.3355 6.14605 29.2941 5.10465L27.4085 3.21904Z"
        fill="#1E202C"
      />
    </svg>
  );
};
