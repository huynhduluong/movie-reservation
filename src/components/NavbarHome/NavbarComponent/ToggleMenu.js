import { Button, Drawer, Hidden, List, ListItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStyles } from "../NavbarStyle";
import SwitchMode from "./SwitchMode";
import UserIcon from "./UserIcon";

export default function ToggleMenu() {
  const classes = useStyles();
  const [state, setState] = useState({
    toggleStatus: false,
  });

  const logOut = () => {
    localStorage.removeItem("UserGuest");
  };

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
        <ListItem button>
          <UserIcon />
        </ListItem>
        <Hidden mdUp>
          <ListItem button>
            <Link to="/thong-tin-nguoi-dung" className={classes.info}>
              Thông tin
            </Link>
          </ListItem>
          <ListItem button onClick={logOut}>
            Đăng xuất
          </ListItem>
        </Hidden>
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
