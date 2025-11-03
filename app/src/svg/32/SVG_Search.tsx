import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Search: FC<Props> = ({ ...props }) => {
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
        d="M19.277 21.1627C17.7453 22.116 15.937 22.6667 14 22.6667C8.47715 22.6667 4 18.1896 4 12.6667C4 7.1439 8.47715 2.66675 14 2.66675C19.5228 2.66675 24 7.1439 24 12.6667C24 15.2877 22.9917 17.6731 21.3419 19.4563L28.9428 27.0573C29.4635 27.578 29.4635 28.4222 28.9428 28.9429C28.4221 29.4636 27.5779 29.4636 27.0572 28.9429L19.277 21.1627ZM21.3333 12.6667C21.3333 16.7168 18.0501 20.0001 14 20.0001C9.94991 20.0001 6.66667 16.7168 6.66667 12.6667C6.66667 8.61666 9.94991 5.33341 14 5.33341C18.0501 5.33341 21.3333 8.61666 21.3333 12.6667Z"
        fill="#1E202C"
      />
    </svg>
  );
};
