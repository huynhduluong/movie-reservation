import React from "react";
import { WithCardStyles } from "./WithCardStyles";

import { CardMedia, Card } from "@material-ui/core";

export default function WithCard(Component) {
  return function (props) {
    const classes = WithCardStyles();
    return (
      <Card className={classes.root}>
        <div className={classes.image}>
          <CardMedia
            className={classes.cover}
            image={props.data.imageLink}
            title="Live from space album cover"
          />
        </div>
        <div className={classes.details}>
          <Component item={props.data} />
        </div>
      </Card>
    );
  };
}
