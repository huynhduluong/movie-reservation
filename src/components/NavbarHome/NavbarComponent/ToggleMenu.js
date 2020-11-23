import {
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SwitchMode from "./SwitchMode";
import UserIcon from "./UserIcon";

export default function ToggleMenu() {
  const [state, setState] = useState({
    toggleStatus: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ toggleStatus: open });
  };

  const list = () => (
    <div
      style={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <SwitchMode />
        </ListItem>
        <ListItem button component={Link} to="/dang-nhap">
          <UserIcon />
        </ListItem>
      </List>
      <Divider />
      <List>
        {["Lịch chiếu", "Cụm rạp", "Tin tức", "Ứng dụng"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor="right"
        open={state.toggleStatus}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </React.Fragment>
  );
}
