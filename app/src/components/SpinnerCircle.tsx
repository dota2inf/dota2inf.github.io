import { type FC } from "react";
import { clsx } from "clsx";

import "./SpinnerCircle.scss";

interface Props {
  colorType?: "white" | "primary" | "secondary" | "error" ;
  width?: string;
}

export const SpinnerCircle: FC<Props> = ({
  width = "24px",
  colorType = "white",
}) => {
  return (
    <div
      className="component_SpinnerCircle"
      style={{
        width,
        height: width,
      }}
    >
      <div
        className={clsx(
          "no_select",
          "component_SpinnerCircle_color",
          colorType === "white" && "component_SpinnerCircle_White",
          colorType === "primary" && "component_SpinnerCircle_Primary",
          colorType === "secondary" && "component_SpinnerCircle_Secondary",
          colorType === "error" && "component_SpinnerCircle_Error",
        )}
      />
    </div>
  );
};
