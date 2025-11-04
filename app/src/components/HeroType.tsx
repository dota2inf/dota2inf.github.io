import { type FC, useMemo } from "react";
import { clsx } from "clsx";
import "./HeroType.scss";

import strImg from "../assets/hero_strength.png";
import intImg from "../assets/hero_intelligence.png";
import agiImg from "../assets/hero_agility.png";
import uniImg from "../assets/hero_universal.png";

interface Props {
  className?: string;
  type?: number;
}

export const HeroType: FC<Props> = ({ className, type }) => {
  
  const renderType = useMemo(() => {
    if (type === 0) {
      return <img src={strImg} />;
    }
    if (type === 1) {
      return <img src={intImg} />;
    }
    if (type === 2) {
      return <img src={agiImg} />;
    }
    if (type === 3) {
      return <img src={uniImg} />;
    }
  }, [type]);

  return (
    <div
      className={clsx("component_HeroType", className)}
    > 
      {renderType}
    </div>
  );
};
