import { useNavigate } from "react-router";
import { clsx } from "clsx";
import "./Main.scss";

import { useTranslation } from "react-i18next";
import { WrapperPage } from "components/WrapperPage";

import imgLogo from "assets/logoAnim.gif";
import { ButtonGlow } from "components/ButtonGlow";

export const Main = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <WrapperPage
      className="page_Main"
      middleBlock={
        <>
          <div className="page_Main_cover">
            <img src={imgLogo} />
          </div>
          
          <div className="page_Main_buttonWrap">
            <ButtonGlow key="Patches" title={t('Patches')} onClick={() => navigate("/patches")} />,
            <ButtonGlow key="Heroes" title={t('Heroes')} onClick={() => navigate("/heroes")} />,
            <ButtonGlow key="Items" title={t('Items')} onClick={() => navigate("/items")} />,
            <ButtonGlow key="About" title={t('About')} onClick={() => navigate("/about")} />
          </div>
        </>
      }
      bottomBlock={
        <div className={clsx("page_Main_bottomWrap", "no_select")}>{t('bottomLine')}</div>
      }
    />
  );
};
