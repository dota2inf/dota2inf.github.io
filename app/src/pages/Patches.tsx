import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { List, AutoSizer } from "react-virtualized";

import { WrapperPage } from "components/WrapperPage";
import { BottomText } from "components/BottomText";
import { ButtonsNavigate } from "components/ButtonsNavigate";
import { asyncGetPatches } from "store/reducers/patches";
import { useAppDispatch, useGetPatches } from "store/hooks";
import { useLangChanged } from "utils/i18n";
import { SpinnerCircle } from "components/SpinnerCircle";
import { formatTimestamp } from "utils/utils";
import { useModal } from "modals/Modal";
import { Patch } from "modals/Patch";

import "./Patches.scss";


export const Patches = () => {
  const openModal = useModal();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const lang = useLangChanged();
  const patches = useGetPatches();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      await dispatch(asyncGetPatches());
      setLoading(false);
    };
    request();
  }, [dispatch, lang]);

  return (
    <WrapperPage
      className="page_Patches"
      topBlock={<ButtonsNavigate withHomeButton selectedIndex={0} />}
      middleBlock={
        <>
          {isLoading ? (
            <div className="page_Patches_loading">
              <SpinnerCircle />
            </div>
          ) : (
            <div className="page_Patches_content">
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    width={width}
                    height={height}
                    rowCount={patches.length}
                    rowHeight={40} // match your css
                    rowRenderer={({ index, style }) => (
                      <div key={patches[index].patch_number} style={style}>
                        <div className="page_Patches_content-itemWrap" onClick={() => openModal(Patch, {date: patches[index].patch_timestamp, patchNumber: patches[index].patch_number})}>
                          <div className="page_Patches_content-item">
                            <div>
                              <span className="page_Patches_content-placeholder">
                                {t("patch")}
                              </span>
                              {patches[index].patch_name}
                            </div>
                            <div>
                              <span className="page_Patches_content-placeholder">
                                {t("dateRelease")}
                              </span>
                              {formatTimestamp(patches[index].patch_timestamp)}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  />
                )}
              </AutoSizer>
            </div>
          )}
        </>
      }
      bottomBlock={<BottomText />}
    />
  );
};
