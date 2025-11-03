import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Double_Chevron_Right: FC<Props> = ({ ...props }) => {
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
        d="M15.0572 7.39052C15.5778 6.86983 16.4221 6.86983 16.9428 7.39052L24.2761 14.7239C24.7968 15.2446 24.7968 16.0888 24.2761 16.6095L16.9428 23.9428C16.4221 24.4635 15.5778 24.4635 15.0571 23.9428C14.5364 23.4221 14.5364 22.5779 15.0571 22.0572L21.4477 15.6667L15.0571 9.27614C14.5365 8.75544 14.5365 7.91122 15.0572 7.39052Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.39052 7.39052C7.91122 6.86983 8.75544 6.86983 9.27614 7.39052L16.6095 14.7239C17.1302 15.2446 17.1302 16.0888 16.6095 16.6095L9.27614 23.9428C8.75544 24.4635 7.91122 24.4635 7.39052 23.9428C6.86982 23.4221 6.86982 22.5779 7.39052 22.0572L13.781 15.6667L7.39052 9.27614C6.86982 8.75544 6.86983 7.91122 7.39052 7.39052Z"
        fill="#1E202C"
      />
    </svg>
  );
};
