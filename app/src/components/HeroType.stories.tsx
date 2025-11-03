import { HeroType } from "./HeroType";

export default {
  title: "Components/HeroType",
  component: HeroType,
};
export const Primary = () => (
  <div style={{background: 'black', padding: 20}}><HeroType /></div>
);
