import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Double_Chevron_Up: FC<Props> = ({ ...props }) => {
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
        d="M7.55715 16.4427C7.03645 15.922 7.03645 15.0778 7.55715 14.5571L14.8905 7.22378C15.4112 6.70308 16.2554 6.70308 16.7761 7.22378L24.1094 14.5571C24.6301 15.0778 24.6301 15.922 24.1094 16.4427C23.5887 16.9634 22.7445 16.9634 22.2238 16.4427L15.8333 10.0522L9.44277 16.4427C8.92207 16.9634 8.07785 16.9634 7.55715 16.4427Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.55715 24.1095C7.03645 23.5888 7.03645 22.7446 7.55715 22.2239L14.8905 14.8905C15.4112 14.3698 16.2554 14.3698 16.7761 14.8905L24.1094 22.2239C24.6301 22.7446 24.6301 23.5888 24.1094 24.1095C23.5887 24.6302 22.7445 24.6302 22.2238 24.1095L15.8333 17.719L9.44277 24.1095C8.92207 24.6302 8.07785 24.6302 7.55715 24.1095Z"
        fill="#1E202C"
      />
    </svg>
  );
};
