import { type FC, useState } from "react";
import { clsx } from "clsx";
import "./HeroRow.scss";
import type { Hero } from "store/types";
import { useTranslation } from "react-i18next";
import unknownImg from "../assets/heroes/unknown.png";

const rawImages = import.meta.glob("../assets/heroes/*.png", { eager: true });
const heroImages: Record<string, string> = {};

interface Props {
  className?: string;
  hero?: Hero;
}

Object.entries(rawImages).forEach(([key, value]) => {
  const name = key.split("/").pop()?.replace(".png", "");
  heroImages[name!] = (value as { default: string }).default;
});

function useImageWithFallback(src: string, fallback: string) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallback);
  };

  return { imgSrc, handleError };
}
export const HeroRow: FC<Props> = ({ className, hero }) => {
  const heroImageName = hero?.name.split("_").slice(3).join("_") || "";
  const cdnSrc = `https://cdn.steamstatic.com/apps/dota2/images/dota_react/heroes/${heroImageName}.png`;
  const localSrc = heroImages[heroImageName] || unknownImg;
  const { imgSrc, handleError } = useImageWithFallback(cdnSrc, localSrc);
  const { t } = useTranslation();
  console.log('--+ hero', hero);
  return (
    <div
      className={clsx("component_HeroRow", className)}
      onClick={() => console.log("--+ OpenModal")}
    >
      <div className="component_HeroRow-leftBlock">
        <img
          className="component_HeroRow-image"
          src={imgSrc}
          onError={handleError}
          alt={hero?.name_loc}
        />
        <span>{hero?.name_loc}</span>
      </div>
      <div className="component_HeroRow-rightBlock">
        <span>{t('type')}</span>
        <span>{t('complexity')}</span>
        
      </div>
    </div>
  );
};
