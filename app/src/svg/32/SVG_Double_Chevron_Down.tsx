import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Double_Chevron_Down: FC<Props> = ({ ...props }) => {
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
        d="M24.1095 14.8905C24.6302 15.4112 24.6302 16.2554 24.1095 16.7761L16.7761 24.1095C16.2554 24.6302 15.4112 24.6302 14.8905 24.1095L7.55719 16.7761C7.03649 16.2554 7.03649 15.4112 7.55719 14.8905C8.07789 14.3698 8.92211 14.3698 9.44281 14.8905L15.8333 21.281L22.2239 14.8905C22.7446 14.3698 23.5888 14.3698 24.1095 14.8905Z"
        fill="#1E202C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.1095 7.22402C24.6302 7.74472 24.6302 8.58894 24.1095 9.10964L16.7761 16.443C16.2554 16.9637 15.4112 16.9637 14.8905 16.443L7.55719 9.10963C7.03649 8.58894 7.03649 7.74472 7.55719 7.22402C8.07789 6.70332 8.92211 6.70332 9.44281 7.22402L15.8333 13.6145L22.2239 7.22402C22.7446 6.70332 23.5888 6.70332 24.1095 7.22402Z"
        fill="#1E202C"
      />
    </svg>
  );
};
