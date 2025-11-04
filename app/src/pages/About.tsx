// import { useNavigate } from "react-router";
// import { clsx } from "clsx";
import "./About.scss";

// import { useTranslation } from "react-i18next";
import { WrapperPage } from "components/WrapperPage";

import { BottomText } from "components/BottomText";
import { ButtonsNavigate } from "components/ButtonsNavigate";

export const About = () => {
  // const navigate = useNavigate();
  // const { t } = useTranslation();

  return (
    <WrapperPage
      className="page_About"
      topBlock={<ButtonsNavigate withHomeButton selectedIndex={3}  />}
      middleBlock={<div>
       
        <a href="/storybook.html">Storybook</a>
        <div>vite</div>
        <div>eslint</div>
        <div>prettier</div>
        <div>i18n lang</div>
        <div>react</div>
        <div>redux</div>
        
        <div>toast</div>
        <div>modals</div>
        <div>vitrualization</div>
      </div>}
      bottomBlock={<BottomText />}
    />
  );
};
