import { useEffect, useState } from "react";

import "./Main.scss";

import { WrapperPage } from "components/WrapperPage";

import { SpinnerCircle } from "components/SpinnerCircle";
import { asyncGetItems } from "store/reducers/items";
import imgLogo from "assets/logoAnim.gif";

export const Main = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    asyncGetItems();
  }, []);

  return (
    <WrapperPage
      middleBlock={
        <>
          {loading ? (
            <div className="page-main-loading">
              <SpinnerCircle />
            </div>
          ) : (
            <div className="mainLogo">
              <div>
                <img src={imgLogo} />
              </div>
            </div>
          )}
        </>
      }
      
    />
  );
};
