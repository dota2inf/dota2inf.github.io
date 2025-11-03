import { useState } from "react";
import { DropdownSelect } from "./DropdownSelect";

export default {
  title: "Components/DropdownSelect",
  component: DropdownSelect,
};

export const Primary = () => {
  const [value, setValue] = useState("de");

  return (
    <div style={{background: 'black'}}>
      <div style={{color: 'white'}}>uncontrolable</div>
      <DropdownSelect
        onChange={console.log}
        data={[
          { label: "English", value: "en" },
          { label: "Deutsch", value: "de" },
          { label: "Italiano", value: "it" },
        ]}
      />
      <div>some text</div>
      <div>some text</div>
      <div>some text</div>
      <div>some text</div>
      <div style={{color: 'white'}}>controlable</div>
      <DropdownSelect
        value={value}
        onChange={(it) => setValue(it.value)}
        data={[
          { label: "English", value: "en" },
          { label: "Deutsch", value: "de" },
          { label: "Italiano", value: "it" },
        ]}
      />
      <div>some text</div>
      <div>some text</div>
      <div>some text</div>
      <div>some text</div>
    </div>
  );
};
