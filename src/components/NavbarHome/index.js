import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Hidden,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ToggleMenu from "./NavbarComponent/ToggleMenu";
import SwitchMode from "./NavbarComponent/SwitchMode";
import UserIcon from "./NavbarComponent/UserIcon";
import { Link } from "react-router-dom";
import { useStyles } from "./NavbarStyle";

export default function NavbarHome() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.maxHeightNavbarHome}></div>
      <div>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <Avatar
              alt="logo"
              variant="square"
              src="img/logo.png"
              className={classes.logo}
            ></Avatar>
            <div className={classes.listNav}>
              <Hidden xsDown>
                <Box display="flex">
                  <Link href="#" className={classes.link}>
                    Lịch chiếu
                  </Link>
                  <Link href="#" className={classes.link}>
                    Cụm rạp
                  </Link>
                  <Link href="#" className={classes.link}>
                    Tin tức
                  </Link>
                  <Link href="#" className={classes.link}>
                    Ứng dụng
                  </Link>
                </Box>
              </Hidden>
            </div>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              className={classes.navRight}
            >
              <Hidden smDown>
                <Link to="/dang-nhap" className={classes.textLogin}>
                  <UserIcon />
                </Link>
                <SwitchMode />
              </Hidden>
              <Hidden mdUp>
                <ToggleMenu />
              </Hidden>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}
