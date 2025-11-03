import { type FC } from "react";
import { clsx } from "clsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

import { ButtonGlow } from "./ButtonGlow";
import imgLogo from "assets/logoAnim.gif";

import "./ButtonsNavigate.scss";
import { DropdownSelectLanguages } from "./DropdownSelectLanguages";

interface Props {
  className?: string;
  withHomeButton?: boolean;
  selectedIndex?: number;
}

export const ButtonsNavigate: FC<Props> = ({ className, withHomeButton, selectedIndex }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className={clsx("component_ButtonsNavigate", className)}>
      {withHomeButton ? <div className="component_ButtonsNavigate_homeButton"><img src={imgLogo} onClick={() => navigate("/")} /></div> : null}
      <ButtonGlow isSelected={selectedIndex === 0} title={t("Patches")} onClick={() => navigate("/patches")} />
      <ButtonGlow isSelected={selectedIndex === 1} title={t("Heroes")} onClick={() => navigate("/heroes")} />
      <ButtonGlow isSelected={selectedIndex === 2} title={t("Items")} onClick={() => navigate("/items")} />
      <ButtonGlow isSelected={selectedIndex === 3} title={t("About")} onClick={() => navigate("/about")} />
      <DropdownSelectLanguages />
    </div>
  );
};
