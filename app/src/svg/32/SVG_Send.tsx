import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Send: FC<Props> = ({ ...props }) => {
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
        d="M28.9428 3.05706C29.2827 3.39698 29.4133 3.89355 29.2847 4.35673L22.618 28.3567C22.4813 28.8488 22.0756 29.2196 21.5732 29.3114C21.0709 29.4033 20.5601 29.2002 20.2581 28.7884L13.0461 18.9538L3.21152 11.7417C2.79968 11.4397 2.59654 10.929 2.68843 10.4266C2.78031 9.92427 3.15107 9.51853 3.64314 9.38184L27.6431 2.71518C28.1063 2.58652 28.6029 2.71714 28.9428 3.05706ZM15.7517 18.1338L20.7839 24.996L25.3587 8.52678L15.7517 18.1338ZM23.4731 6.64116L13.866 16.2482L7.00387 11.2159L23.4731 6.64116Z"
        fill="#1E202C"
      />
    </svg>
  );
};
