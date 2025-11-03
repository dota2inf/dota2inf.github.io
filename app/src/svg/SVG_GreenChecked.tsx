import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_GreenChecked: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM13.2734 6.21582C12.9604 5.92318 12.4468 5.92916 12.1406 6.22656L7.72461 10.5195L5.85449 8.73633C5.54497 8.44134 5.03128 8.44145 4.72168 8.73633C4.42614 9.01858 4.42597 9.46785 4.72168 9.75L7.16406 12.0781C7.31041 12.2177 7.51521 12.3008 7.73438 12.2998C7.95346 12.2987 8.158 12.214 8.30273 12.0732L13.2832 7.22949C13.5757 6.94486 13.5725 6.49562 13.2734 6.21582Z"
        fill="#7DFF7A"
      />
    </svg>
  );
};
