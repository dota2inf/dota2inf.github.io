import { createSlice } from "@reduxjs/toolkit";
import { requestWrap } from "utils/utils";

const defaultState = {
  items: []
};

const itemsSlice = createSlice({
  name: "items",
  initialState: defaultState,
  reducers: {
    setItems(state, action) {
      const { items } = action.payload;
      state.items = items;
    }
  },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;

export function asyncGetItems() {
  // @ts-ignore
  return async (dispatch) => {
    await requestWrap(
      // Item List
      // https://www.dota2.com/datafeed/itemlist?language=english
      // https://www.dota2.com/datafeed/itemlist?language=spanish
      // https://www.dota2.com/datafeed/itemlist?language=italian

      // Item Details (Blink Dagger id: 1)
      // https://www.dota2.com/datafeed/itemdata?language=english&item_id=1
      // https://www.dota2.com/datafeмed/itemdata?language=spanish&item_id=1
      // https://www.dota2.com/datafeed/itemdata?language=italian&item_id=1

      // Hero List
      // https://www.dota2.com/datafeed/herolist?language=english
      // https://www.dota2.com/datafeed/herolist?language=spanish
      // https://www.dota2.com/datafeed/herolist?language=italian

      // Hero Details (Anti-Mage id: 1)
      // https://www.dota2.com/datafeed/herodata?language=english&hero_id=1
      // https://www.dota2.com/datafeed/herodata?language=spanish&hero_id=1
      // https://www.dota2.com/datafeed/herodata?language=italian&hero_id=1

      // Patch Notes List
      // https://www.dota2.com/datafeed/patchnoteslist?language=english
      // https://www.dota2.com/datafeed/patchnoteslist?language=spanish
      // https://www.dota2.com/datafeed/patchnoteslist?language=italian

      // Patch Notes (7.29d)
      // https://www.dota2.com/datafeed/patchnotes?language=english&version=7.29d
      // https://www.dota2.com/datafeed/patchnotes?language=spanish&version=7.29d
      // https://www.dota2.com/datafeed/patchnotes?language=italian&version=7.29d


      "https://www.dota2.com/datafeed/itemlist?language=english",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      },
      null,
      (data, _response, status) => {
        console.log(data);
        if (data?.url && status === 200) {
          dispatch(setItems([]));
        }
      },
      true,
    );
  };
}
