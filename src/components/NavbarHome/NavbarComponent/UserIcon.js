import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { useStyles } from "../NavbarStyle";
import { Hidden, List, ListItem } from "@material-ui/core";

export default function UserIcon() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("UserGuest"));

  const logOut = () => {
    localStorage.removeItem("UserGuest");
  };

  const loginForm = () => {
    return (
      <Link to="/dang-nhap" className={classes.textLogin}>
        <AccountCircleIcon color="action" className={classes.iconColor} />
        <span style={{ marginLeft: "8px" }}>Đăng nhập</span>
      </Link>
    );
  };

  const userInfo = () => {
    return (
      <div className={classes.userContainer}>
        <div className={classes.textLogin}>
          <AccountCircleIcon color="action" className={classes.iconColor} />
          <span style={{ marginLeft: "8px" }}>{user.hoTen}</span>
        </div>
        <Hidden smDown>
          <List>
            <ListItem button>
              <Link to="/thong-tin-nguoi-dung" className={classes.info}>
                Thông tin
              </Link>
            </ListItem>
            <ListItem button onClick={logOut}>
              Đăng xuất
            </ListItem>
          </List>
        </Hidden>
      </div>
    );
  };
  return <React.Fragment>{user ? userInfo() : loginForm()}</React.Fragment>;
}
