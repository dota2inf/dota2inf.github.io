import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Down_Left: FC<Props> = ({ ...props }) => {
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
        d="M18.2367 25.5427C18.9872 25.5569 19.5842 24.9599 19.57 24.2094C19.5558 23.4588 18.9359 22.8389 18.1854 22.8248L10.7091 22.6837L24.5523 8.84043C25.0405 8.35227 25.0405 7.56082 24.5523 7.07266C24.0642 6.5845 23.2727 6.5845 22.7846 7.07266L8.94129 20.9159L8.80023 13.4396C8.78607 12.6891 8.16615 12.0691 7.41561 12.055C6.66507 12.0408 6.06812 12.6378 6.08228 13.3883L6.28172 23.9587C6.29588 24.7092 6.91579 25.3291 7.66633 25.3433L18.2367 25.5427Z"
        fill="#1E202C"
      />
    </svg>
  );
};
