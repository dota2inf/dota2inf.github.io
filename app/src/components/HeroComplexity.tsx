import { type FC } from "react";
import { clsx } from "clsx";
import "./HeroComplexity.scss";


interface Props {
  className?: string;
  complexity?: number;
}

export const HeroComplexity: FC<Props> = ({ className, complexity }) => {
  
  return (
    <div
      className={clsx("component_HeroComplexity", className)}
    >
      {complexity}
    </div>
  );
};
