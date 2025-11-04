import { HeroType } from "./HeroType";

export default {
  title: "Components/HeroType",
  component: HeroType,
};
export const Primary = () => (
  <HeroType type={3} />
);
