import { type FC } from "react";
import { clsx } from "clsx";
import "./HeroComplexity.scss";
import { SVG_Star } from "svg/SVG_Star";


interface Props {
  className?: string;
  complexity?: number;
}

export const HeroComplexity: FC<Props> = ({ className, complexity }) => {
  
  return (
    <div
      className={clsx("component_HeroComplexity", className)}
    >
      <span>{complexity}</span> <SVG_Star />
    </div>
  );
};
