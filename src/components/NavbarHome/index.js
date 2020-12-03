import React from "react";
import { AppBar, Avatar, Box, Hidden, Toolbar } from "@material-ui/core";
import ToggleMenu from "./NavbarComponent/ToggleMenu";
import SwitchMode from "./NavbarComponent/SwitchMode";
import UserIcon from "./NavbarComponent/UserIcon";
import { Link } from "react-router-dom";
import { useStyles } from "./NavbarStyle";

export default function NavbarHome() {
  const classes = useStyles();
  return (
    <Hidden only="xs">
      <div className={classes.maxHeightNavbarHome}></div>
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
                <a href="#carouselTabFilm" className={classes.link}>
                  Lịch chiếu
                </a>
                <a href="#cumrap" className={classes.link}>
                  Cụm rạp
                </a>
                <a href="#" className={classes.link}>
                  Tin tức
                </a>
                <a href="#appPromotion" className={classes.link}>
                  Ứng dụng
                </a>
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
    </Hidden>
  );
}
