import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Up_Left: FC<Props> = ({ ...props }) => {
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
        d="M6.08228 18.6114C6.06812 19.362 6.66507 19.9589 7.41561 19.9448C8.16615 19.9306 8.78607 19.3107 8.80023 18.5601L8.94129 11.0838L22.7846 24.9271C23.2727 25.4152 24.0642 25.4152 24.5523 24.9271C25.0405 24.4389 25.0405 23.6475 24.5523 23.1593L10.7091 9.31604L18.1854 9.17498C18.9359 9.16082 19.5558 8.54091 19.57 7.79037C19.5842 7.03983 18.9872 6.44287 18.2367 6.45703L7.66633 6.65647C6.91579 6.67063 6.29588 7.29055 6.28172 8.04109L6.08228 18.6114Z"
        fill="#1E202C"
      />
    </svg>
  );
};
