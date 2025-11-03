import { HeroComplexity } from "./HeroComplexity";

export default {
  title: "Components/HeroComplexity",
  component: HeroComplexity,
};
export const Primary = () => (
  <div style={{background: 'black', padding: 20}}><HeroComplexity /></div>
);
