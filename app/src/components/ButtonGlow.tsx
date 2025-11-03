import { type FC } from "react";
import { clsx } from "clsx";
import "./ButtonGlow.scss";

interface Props {
  className?: string;
  title?: string;
  onClick?: () => void;
  isSelected?: boolean;
}

export const ButtonGlow: FC<Props> = ({
  className,
  title,
  onClick,
  isSelected
}) => {
  return (
    <div className={clsx("component_ButtonGlow", isSelected && "component_ButtonGlow_selected", className)} onClick={onClick}>
      {title}
    </div>
  );
};
