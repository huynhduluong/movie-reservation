import { makeStyles } from "@material-ui/core";
import React from "react";
import CarouselHome from "../../../components/CarouselHome";
import CarouselMovie from "../../../components/CarouselMovie";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "900px",
  },
}));

export default function DesktopHome() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CarouselHome />
      <CarouselMovie />
    </React.Fragment>
  );
}
