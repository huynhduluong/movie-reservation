import React from "react";
import { DesktopHomeStyle } from "./DesktopHomeStyle";
import LogoCinema from "../../../../components/LogoCinema";
import CinemaList from "../../../../components/CinemaList";
import ShowTimeList from "../../../../components/ShowTimeList";
import { CustomScrollbars } from "../../../../components/ScrollBar";

export default function CinemaSection() {
  const classes = DesktopHomeStyle();
  return (
    <div id="cumrap" className={classes.cinemaSection}>
      <LogoCinema />
      <CustomScrollbars className={classes.cinemaScrollBar}>
        <CinemaList />
      </CustomScrollbars>
      <CustomScrollbars className={classes.showTimeScrollBar}>
        <ShowTimeList />
      </CustomScrollbars>
    </div>
  );
}
