import { createSlice } from "@reduxjs/toolkit";
import { requestWrap } from "utils/utils";
import { herolist } from "mock/herolist";

const defaultState = {
  heroes: {},
};

const heroesSlice = createSlice({
  name: "heroes",
  initialState: defaultState,
  reducers: {
    setHeroes(state, action) {
      const { heroes } = action.payload;
      state.heroes = heroes;
    },
  },
});

export const { setHeroes } = heroesSlice.actions;

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
