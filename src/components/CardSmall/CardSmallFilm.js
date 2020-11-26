import React from "react";
import { Box, Button, Typography, CardContent } from "@material-ui/core";
import { WithCardStyles } from "./WithCardStyles";

export default function CardSmallFilm() {
  const classes = WithCardStyles();
  return (
    <CardContent className={classes.content}>
      <Typography component="h5" variant="h5" className={classes.filmTitle}>
        Gia Đình Croods: Kỷ nguyên
      </Typography>
      <Box display="flex">
        <Button
          color="secondary"
          variant="contained"
          className={classes.ageLimitButton}
        >
          P
        </Button>
        <Typography
          variant="subtitle1"
          color="textSecondary"
          className={classes.timeFilm}
        >
          0p
        </Typography>
      </Box>
      <Button
        color="primary"
        variant="contained"
        className={classes.ticketButton}
      >
        Đặt vé
      </Button>
    </CardContent>
  );
}
