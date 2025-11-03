import { type FC } from "react";
import { clsx } from "clsx";
import "./HeroType.scss";


interface Props {
  className?: string;
  type?: string;
}

export const HeroType: FC<Props> = ({ className, type }) => {
  
  return (
    <div
      className={clsx("component_HeroType", className)}
    > 
      {type}
    </div>
  );
};
