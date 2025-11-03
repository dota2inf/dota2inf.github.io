import { type FC } from "react";
import { clsx } from "clsx";
import "./DividerWithText.scss";

interface Props {
  className?: string;
  text?: string;
}

export const DividerWithText: FC<Props> = ({ className, text = "Or" }) => {
  return (
    <div className={clsx("component-dividerWithText", className)}>
      <div className="component-dividerWithText-divider" />
      <div className="component-dividerWithText-text">{text}</div>
      <div className="component-dividerWithText-divider" />
    </div>
  );
};
