import { createSlice } from "@reduxjs/toolkit";
import { getStringLanguage } from "utils/i18n";
import { requestWrap } from "utils/utils";

const defaultState = {
  patches: [],
  patch: {
    heroes: [],
    neutral_items: [],
    items: []
  },
};

const patchesSlice = createSlice({
  name: "patches",
  initialState: defaultState,
  reducers: {
    setPatches(state, action) {
      const patches = action.payload;
      state.patches = patches;
    },
    setPatch(state, action) {
      const {heroes, neutral_items, items} = action.payload;
      state.patch.heroes = heroes;
      state.patch.neutral_items = neutral_items;
      state.patch.items = items;
    },
  },
});

export const { setPatches, setPatch } = patchesSlice.actions;

export default patchesSlice.reducer;

export function asyncGetPatches() {
  const lang = getStringLanguage();
  return async (dispatch) => {
    const dotaUrl = `https://www.dota2.com/datafeed/patchnoteslist?language=${lang}`;
    const workerUrl = `https://dota2.dashmtau.workers.dev/?url=${encodeURIComponent(dotaUrl)}`;

    await requestWrap(
      workerUrl,
      {
        method: "GET",
      },
      null,
      (data, _response, status) => {
        if (Array.isArray(data?.patches) && status === 200) {
          dispatch(setPatches(data.patches.reverse()));
        }
      },
    );
  };
}

export function asyncGetPatch(patchNumber) {
  const lang = getStringLanguage();
  return async (dispatch) => {
    const dotaUrl = `https://www.dota2.com/datafeed/patchnotes?language=${lang}&version=${patchNumber}`;
    const workerUrl = `https://dota2.dashmtau.workers.dev/?url=${encodeURIComponent(dotaUrl)}`;

    await requestWrap(

      workerUrl,
      {
        method: "GET",
      },
      null,
      (data, _response, status) => {
        console.log("--+ data", data);
        if (Array.isArray(data?.heroes) && Array.isArray(data?.neutral_items) && Array.isArray(data?.items) && status === 200) {
          console.log('-----@@@', data.heroes);
          // TODO++ heroes should be simple array
          dispatch(setPatch({heroes: data.heroes, neutral_items: data.neutral_items, items: data.items}));
          
        }
      },
    );
  };
}
