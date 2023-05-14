import React, { useState } from "react";
import Switch from "react-switch";

export default function ToggleSwitch() {
  const [active, inActive] = useState(false);

  const handleChange = () => {
    inActive(!active);
  };
  return (
    <div>
      <Switch
        onChange={handleChange}
        checked={active}
        checkedIcon={<span>Active</span>}
        offHandleColor="#fff"
        // uncheckedIcon={<div>InActive</div>}
      />
    </div>
  );
}
