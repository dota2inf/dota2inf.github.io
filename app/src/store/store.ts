import { configureStore, combineReducers } from "@reduxjs/toolkit";
import itemsSlice from "./reducers/items";
import patchesSlice from "./reducers/patches";
import heroesSlice from "./reducers/heroes";
import testSlice from "./reducers/test";

const rootReducer = combineReducers({
  test: testSlice,
  items: itemsSlice,
  patches: patchesSlice,
  heroes: heroesSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
