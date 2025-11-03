import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { type RootState, type AppDispatch } from "./store";
import type { Heroes, Patches } from "./types";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;




export const useGetPatches = () => {
  const patches: Patches[] = useAppSelector((state) => state.patches).patches;
  return Array.isArray(patches) ? patches : [];
};

export const useGetHeroes = () => {
  const heroes: Heroes = useAppSelector((state) => state.heroes).heroes;
  return heroes;
};

export const useGetPatchHeroesChanges = () => {
  const heroes: string[] = useAppSelector((state) => state.patches).patch.heroes;
  return Array.isArray(heroes) ? heroes : [];
};

// export const useGetUserPlan = (): string => {
//   const user = useAppSelector((state) => state.user);

//   if (user.subscription_tier === "basic") {
//     return "basic";
//   }
//   if (user.subscription_tier === "premium") {
//     return "premium";
//   }

//   return "";
// };

// export const useGetIsPremium = (): boolean => {
//   const user = useAppSelector((state) => state.user);
//   return user.subscription_tier === "premium";
// };

// export const useGetNextPayment = (): string => {
//   const user = useAppSelector((state) => state.user);
//   // new rule from backend to displaying "Next Payment"
//   if (user.subscription_end && user.downgrade_requested_at === null) {
//     return user.subscription_end;
//   }
//   return '';
// };
