import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Chevrons_Diagonal: FC<Props> = ({ ...props }) => {
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
        d="M21.6568 9.09326C22.3472 9.09326 22.9068 9.65291 22.9068 10.3433V16.0001C22.9068 16.6905 22.3472 17.2501 21.6568 17.2501C20.9664 17.2501 20.4068 16.6905 20.4068 16.0001V11.5933H15.9999C15.3096 11.5933 14.7499 11.0336 14.7499 10.3433C14.7499 9.65291 15.3096 9.09326 15.9999 9.09326H21.6568Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3432 22.9067C9.65285 22.9067 9.0932 22.3471 9.0932 21.6567L9.0932 15.9999C9.0932 15.3095 9.65285 14.7499 10.3432 14.7499C11.0336 14.7499 11.5932 15.3095 11.5932 15.9999L11.5932 20.4067L16.0001 20.4067C16.6904 20.4067 17.2501 20.9664 17.2501 21.6567C17.2501 22.3471 16.6904 22.9067 16.0001 22.9067L10.3432 22.9067Z"
        fill="#1E202C"
      />
    </svg>
  );
};
