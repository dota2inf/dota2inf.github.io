import { useTranslation } from "react-i18next";

import { WrapperPage } from "components/WrapperPage";
import { BottomText } from "components/BottomText";
import { ButtonsNavigate } from "components/ButtonsNavigate";
import imgLogo from "assets/logoAnim.gif";

import "./Main.scss";

export const Main = () => {
  const { t } = useTranslation();

  return (
    <WrapperPage
      className="page_Main"
      topBlock={<ButtonsNavigate withHomeButton />}
      middleBlock={
        <>
          <div className="page_Main_cover">
            <img src={imgLogo} />
          </div>

          <div className="page_Main_text">{t("mainText1")}</div>
        </>
      }
      bottomBlock={<BottomText />}
    />
  );
};
