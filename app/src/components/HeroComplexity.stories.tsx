import { HeroComplexity } from "./HeroComplexity";

export default {
  title: "Components/HeroComplexity",
  component: HeroComplexity,
};
export const Primary = () => (
  <HeroComplexity complexity={2} />
);
