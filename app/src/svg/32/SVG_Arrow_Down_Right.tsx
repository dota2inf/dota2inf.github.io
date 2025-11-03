import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Arrow_Down_Right: FC<Props> = ({ ...props }) => {
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
        d="M25.168 13.3883C25.1821 12.6378 24.5852 12.0408 23.8346 12.055C23.0841 12.0691 22.4642 12.6891 22.45 13.4396L22.3089 20.9159L8.46567 7.07266C7.97752 6.5845 7.18606 6.5845 6.6979 7.07266C6.20975 7.56082 6.20975 8.35227 6.6979 8.84043L20.5412 22.6837L13.0648 22.8248C12.3143 22.8389 11.6944 23.4588 11.6802 24.2094C11.6661 24.9599 12.263 25.5569 13.0136 25.5427L23.5839 25.3433C24.3344 25.3291 24.9544 24.7092 24.9685 23.9587L25.168 13.3883Z"
        fill="#1E202C"
      />
    </svg>
  );
};
