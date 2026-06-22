import { createSlice } from "@reduxjs/toolkit";
import { requestWrap } from "utils/utils";
import { herolist } from "mock/herolist";
import { getStringLanguage } from "utils/i18n";

const defaultState = {
  heroes: {},
  hero: {
    id: null,
    name_loc: null,

    bio_loc: null,
    hype_loc: null,
    npe_desc_loc: null,

    complexity: null,
    primary_attr: null,
  },
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState: defaultState,
  reducers: {
    setHeroes(state, action) {
      const { heroes } = action.payload;
      state.heroes = heroes;
    },
    setHero(state, action) {
      const { hero } = action.payload;
      state.hero = hero;
    },
  },
});

export const { setHeroes, setHero } = heroesSlice.actions;

export default heroesSlice.reducer;

export function asyncGetHeroes() {
  return async (dispatch) => {
    // no matter what lang (same for all languages)
    const dotaUrl = `https://www.dota2.com/datafeed/herolist?language=english`;
    const workerUrl = `https://dota2.dashmtau.workers.dev/?url=${encodeURIComponent(dotaUrl)}`;

    await requestWrap(
      workerUrl,
      {
        method: "GET",
      },
      null,
      (data, _response, status) => {
        if (Array.isArray(data?.result?.data?.heroes) && status === 200) {
          const obj = Object.fromEntries(
            data.result.data.heroes.map((item) => [item.id, item]),
          );
          dispatch(setHeroes({ heroes: obj }));
        } else {
          dispatch(setHeroes({ heroes: herolist }));
        }
      },
    );
  };
}

export function asyncGetHero(id) {
  const lang = getStringLanguage();
  return async (dispatch) => {
    const dotaUrl = `https://www.dota2.com/datafeed/herodata?language=${lang}&hero_id=${id}`;
    const workerUrl = `https://dota2.dashmtau.workers.dev/?url=${encodeURIComponent(dotaUrl)}`;

    await requestWrap(
      workerUrl,
      {
        method: "GET",
      },
      null,
      (data, _response, status) => {
        const resp = data?.result?.data?.heroes;

        if (Array.isArray(resp) && status === 200) {
          console.log("-----@@@", resp[0]);
          dispatch(setHero({ hero: resp[0] }));
        }
      },
    );
  };
}
