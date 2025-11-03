import { ButtonGlow } from "./ButtonGlow";

export default {
  title: "Components/ButtonGlow",
  component: ButtonGlow,
};
export const Primary = () => (
  <div style={{background: 'black', padding: 20}}><ButtonGlow title="click" /></div>
);
