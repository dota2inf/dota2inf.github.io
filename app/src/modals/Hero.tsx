import { useState, useEffect } from "react";

import { WrapperModal } from "components/WrapperModal";
import "./Hero.scss";
import { SVG_Delete } from "svg/SVG_Delete";

import { SpinnerCircle } from "components/SpinnerCircle";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useGetHero } from "store/hooks";
import { asyncGetHero } from "store/reducers/heroes";


type Props = {
  onClose?: (result: boolean | null) => void;
  id: string;

};

export const Hero = ({ onClose, id }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const hero = useGetHero();
  const { t } = useTranslation();
  console.log('--+ - @ HERO', hero);
  useEffect(() => {
    const request = async () => {
      setLoading(true);
      await dispatch(asyncGetHero(id));
      setLoading(false);
    };
    request();
  }, [dispatch, id]);

  return (
    <div className="modal_Hero">
      <WrapperModal
        topBlock={
          <div className="modal_Hero_topBar">
            <div className="modal_Hero_topBar-title">
              <div></div>
  
            </div>
            <SVG_Delete
              className="no_select"
              onClick={() => {
                onClose?.(null);
              }}
            />
          </div>
        }
        middleBlock={
          isLoading ? (
            <div className="modal_Hero_loading">
              <SpinnerCircle />
            </div>
          ) : (
            <div className="modal_Hero_content">
              <div>{t('heroesChanges')}</div>
              <div></div>
              <div>{t('itemsChanges')}</div>
              <div></div>
              <div>{t('itemsNeutral')}</div>
              <div></div>
            </div>
          )
        }
      />
    </div>
  );
};
