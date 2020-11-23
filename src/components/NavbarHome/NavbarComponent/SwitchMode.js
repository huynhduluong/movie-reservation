import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

//lưu vào localStorage để khi load page hoặc vào trang lại có thể lấy lại theme

export default function SwitchMode() {
  const [state, setState] = useState({
    switchMode: false,
  });

  console.log(state.switchMode);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <React.Fragment>
      <WbSunnyIcon color="action" />
      <Switch
        checked={state.switchMode}
        onChange={handleChange}
        name="switchMode"
        inputProps={{ "aria-label": "checkbox" }}
      />
      <Brightness2Icon color="action" />
    </React.Fragment>
  );
}
