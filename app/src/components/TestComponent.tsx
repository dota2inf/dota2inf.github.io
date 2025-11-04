import { type FC } from "react";
import "./TestComponent.scss";
import imgEx from "assets/download.jpeg";
import { SVG_Delete } from "svg/SVG_Delete";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setData, setLoading, asyncFetchItems } from "store/reducers/test";
import { openConfirm } from "utils/utils";
import { useTranslation } from "react-i18next";
import {customChangeLanguage} from 'utils/i18n';
import { useModal } from "modals/Modal";
import { TestModal } from "modals/TestModal";
  import { toast } from "react-toastify";
interface Props {
  title?: string;
  disabled?: boolean;
}




export const TestComponent: FC<Props> = () => {
  const { t } = useTranslation();
  const openModal = useModal();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.test.isLoading);
  return (
    <div className="TestComponent">
      
       <h2>CHECK i18n</h2>
       <div>{t('terms_header1')}</div>
       <button onClick={() => {
        customChangeLanguage('en');
       }}>change lang en</button>

       <button onClick={() => {
        customChangeLanguage('es');
       }}>change lang es</button>
      <h3>TestComponent</h3>
      <h3>-00 open modal</h3>
      <button
        onClick={async () => {
           openModal(TestModal, { typeProps: "test" })
        }}
      >
        open modal
      </button>
     
     <h3>-00 open toast</h3>
      <button
        onClick={async () => {
           toast.error(`error`);
        }}
      >
        open toast
      </button>

      <h3>-01 open Confirm (works only in projext)</h3>
      <button
        onClick={async () => {
          const result = await openConfirm(({ close }) => (
            <div onClick={() => close(1)}>close</div>
          ));
          console.log("--+ RESULT - ", result);
        }}
      >
        open confirm
      </button>

      <hr />
      <h3>00 redux here and redux DevTools in chrome</h3>
      <button onClick={() => dispatch(asyncFetchItems("id321"))}>
        async action
      </button>
      <button onClick={() => dispatch(setData({ items: [0] }))}>
        set data
      </button>
      <button onClick={() => dispatch(setLoading({ isLoading: !isLoading }))}>
        loading toggle
      </button>
      <div>{isLoading ? "loading" : "stop loading"}</div>

      <hr />
      <h3>01 media query resize screen to see borders colors</h3>
      <div className="media_border">border color should change</div>
      <hr />
      <h3>00 font and css test</h3>
      <div className="font">arial FONT + background</div>

      <hr />
      <h3>02 image test</h3>
      <div>
        <img className="GLOBAL_img_TEST" src={imgEx} />
      </div>

      <hr />
      <h3>03 download file</h3>
      <a href={imgEx} download>
        download
      </a>

      <hr />
      <h3>04 svg</h3>
      <div>
        <SVG_Delete />
      </div>
    </div>
  );
};
