import { DropdownSelectLanguages } from "./DropdownSelectLanguages";

export default {
  title: "Components/DropdownSelectLanguages",
  component: DropdownSelectLanguages,
};

export const Primary = () => {

  return (
    <div style={{background: 'black', height: '200px'}}>
      <DropdownSelectLanguages />
    </div>
  );
};
