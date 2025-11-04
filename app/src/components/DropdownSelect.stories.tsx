import { useState } from "react";
import { DropdownSelect } from "./DropdownSelect";

export default {
  title: "Components/DropdownSelect",
  component: DropdownSelect,
};

export const Primary = () => {
  const [value, setValue] = useState("de");

  return (
    <DropdownSelect
      value={value}
      onChange={(it) => setValue(it.value)}
      data={[
        { label: "English", value: "en" },
        { label: "Deutsch", value: "de" },
        { label: "Italiano", value: "it" },
      ]}
    />
  );
};
