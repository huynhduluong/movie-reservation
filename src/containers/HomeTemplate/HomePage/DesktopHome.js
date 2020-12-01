import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CarouselHome from "../../../components/CarouselHome";
import Movie from "../../../components/Movie";

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

      <Grid container className={classes.root}>
        <Grid item sm={3}>
          <Movie />
        </Grid>
        <Grid item sm={3}>
          <Movie />
        </Grid>
        <Grid item sm={3}>
          <Movie />
        </Grid>
        <Grid item sm={3}>
          <Movie />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
