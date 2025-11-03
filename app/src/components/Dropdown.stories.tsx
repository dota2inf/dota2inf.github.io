import { Dropdown } from "./Dropdown";
import { SVG_Help } from "svg/32/SVG_Help";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export const Primary = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Dropdown
      button={<SVG_Help />}
      content={(close) => {
        return (
          <div style={{display:'flex', flexDirection: 'column'}}>
            <button onClick={() => close()} style={{ border: "1px solid gray" }}>Profile</button>
            <button onClick={() => close()} style={{ border: "1px solid gray" }}>Settings</button>
            <button onClick={() => close()} style={{ border: "1px solid gray" }}>Controls</button>
          </div>
        );
      }}
    />
  </div>
);
