import { useEffect, useState } from "react";
import { List, AutoSizer } from "react-virtualized";

import { WrapperPage } from "components/WrapperPage";
import { BottomText } from "components/BottomText";
import { ButtonsNavigate } from "components/ButtonsNavigate";
import { asyncGetHeroes } from "store/reducers/heroes";
import { useAppDispatch, useGetHeroes } from "store/hooks";
import { useLangChanged } from "utils/i18n";
import { SpinnerCircle } from "components/SpinnerCircle";


import "./Heroes.scss";
import { HeroRow } from "components/HeroRow";

export const Heroes = () => {
  const dispatch = useAppDispatch();
  const lang = useLangChanged();
  const heroes = useGetHeroes();
  const heroesArray = Object.values(heroes);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      await dispatch(asyncGetHeroes());
      setLoading(false);
    };
    request();
  }, [dispatch, lang]);

  return (
    <WrapperPage
      className="page_Heroes"
      topBlock={<ButtonsNavigate withHomeButton selectedIndex={1} />}
      middleBlock={
        <>
          {isLoading ? (
            <div className="page_Heroes_loading">
              <SpinnerCircle />
            </div>
          ) : (
            <div className="page_Heroes_content">
              <AutoSizer>
                {({ width, height }) => (
                  <List
                    width={width}
                    height={height}
                    rowCount={heroesArray.length}
                    rowHeight={54}
                    rowRenderer={({ index, style }) => {
                      const hero = heroesArray[index];
                      return (
                        <div key={hero.name} style={style}>
                          <HeroRow key={hero.name} hero={hero} />
                        </div>
                      );
                    }}
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
