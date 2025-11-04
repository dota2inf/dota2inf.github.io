import { HeroRow } from "./HeroRow";

export default {
  title: "Components/HeroRow",
  component: HeroRow,
};
export const Primary = () => (
   <HeroRow
      hero={{
        complexity: 2,
        id: 21,
        name: "npc_dota_hero_windrunner",
        name_english_loc: "Windranger",
        name_loc: "Windranger",
        primary_attr: 3,
      }}
    />
);
