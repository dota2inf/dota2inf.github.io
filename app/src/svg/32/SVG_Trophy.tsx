import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Trophy: FC<Props> = ({ ...props }) => {
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
        d="M22.2941 19.5147C21.1096 20.9657 19.4602 21.9629 17.625 22.3375V25.75H20.875V29H11.125V25.75H14.375V22.3375C12.5398 21.9629 10.8904 20.9657 9.70588 19.5147C8.5214 18.0637 7.87462 16.2481 7.875 14.375V3H24.125V14.375C24.1254 16.2481 23.4786 18.0637 22.2941 19.5147ZM20.875 6.25H11.125V14.375C11.125 15.6679 11.6386 16.9079 12.5529 17.8221C13.4671 18.7364 14.7071 19.25 16 19.25C17.2929 19.25 18.5329 18.7364 19.4471 17.8221C20.3614 16.9079 20.875 15.6679 20.875 14.375V6.25ZM29 6.25H25.75V14.375H29V6.25ZM3 6.25H6.25V14.375H3V6.25Z"
        fill="#1E202C"
      />
    </svg>
  );
};
