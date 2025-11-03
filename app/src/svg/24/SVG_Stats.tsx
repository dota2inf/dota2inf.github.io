import { type FC } from "react";

interface Props {
  className?: string;
  width?: string | number;
  height?: string | number;
  viewBox?: string;
  onClick?: () => void;
}

export const SVG_Stats: FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.8918 0L22.2835 6.00054V17.9995L11.8918 24L1.5 17.9995V6.00054L11.8918 0ZM11.8918 2.48498L4.72725 6.62125L11.8918 10.7575L19.0563 6.62125L11.8918 2.48498ZM20.132 8.48445L12.9675 12.6207V20.8932L20.132 16.758V8.48445ZM10.816 20.8943V12.6218L3.6515 8.48337V16.7559L10.816 20.8943ZM12.9675 4.46974V8.77275H10.816V4.46974H12.9675ZM9.63483 14.5452L5.90843 16.6967L4.83268 14.8335L8.55908 12.682L9.63483 14.5452ZM15.2244 12.682L18.9508 14.8335L17.8751 16.6967L14.1487 14.5452L15.2244 12.682Z"
        fill="#A6ACC4"
      />
    </svg>
  );
};
