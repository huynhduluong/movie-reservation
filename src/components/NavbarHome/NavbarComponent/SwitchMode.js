import React, { useEffect } from "react";
import { Switch } from "@material-ui/core";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import { connect } from "react-redux";
import { CHANGE_THEME_REQUEST } from "../modules/constant";

//lưu vào localStorage để khi load page hoặc vào trang lại có thể lấy lại theme

function SwitchMode(props) {
  useEffect(() => {
    if (localStorage.getItem("themeStatus")) {
      props.handleChangeTheme(JSON.parse(localStorage.getItem("themeStatus")));
    } else {
      localStorage.setItem("themeStatus", JSON.stringify(props.themeStatus));
    }
  }, []);
  const handleOnChange = (event) => {
    props.handleChangeTheme(event.target.checked);
  };
  return (
    <React.Fragment>
      <WbSunnyIcon color="action" />
      <Switch
        checked={props.themeStatus}
        onChange={handleOnChange}
        name="switchMode"
        inputProps={{ "aria-label": "checkbox" }}
      />
      <Brightness2Icon color="action" />
    </React.Fragment>
  );
}

const mapStateToPros = (state) => {
  return {
    themeStatus: state.changeThemeReducer.themeStatus,
  };
};
const mapDispatchToProps = (dispatch) => {
  const action = (status) => ({
    type: CHANGE_THEME_REQUEST,
    payload: status,
  });

  return {
    handleChangeTheme: (status) => {
      dispatch(action(status));
      localStorage.setItem("themeStatus", JSON.stringify(status));
    },
  };
};

export default connect(mapStateToPros, mapDispatchToProps)(SwitchMode);
