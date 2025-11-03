import { useState, useEffect } from "react";

import { WrapperModal } from "components/WrapperModal";
import "./Patch.scss";
import { SVG_Delete } from "svg/32/SVG_Delete";

import { SpinnerCircle } from "components/SpinnerCircle";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "store/hooks";
import { asyncGetPatch } from "store/reducers/patches";
import { formatTimestamp } from "utils/utils";


type Props = {
  onClose?: (result: boolean | null) => void;
  patchNumber: string;
  date: number;
};

export const Patch = ({ onClose, patchNumber, date }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  
  const { t } = useTranslation();

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      await dispatch(asyncGetPatch(patchNumber));
      setLoading(false);
    };
    request();
  }, [dispatch, patchNumber]);

  return (
    <div className="modal_Patch">
      <WrapperModal
        topBlock={
          <div className="modal_Patch_topBar">
            <div className="modal_Patch_topBar-title">
              <div>{t("patch")}</div>
              <div>{patchNumber}</div>
              <div> - </div>
              <div>{formatTimestamp(date)}</div>
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
            <div className="modal_Patch_loading">
              <SpinnerCircle />
            </div>
          ) : (
            <div className="modal_Patch_content">
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
