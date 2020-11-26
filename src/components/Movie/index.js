import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { movieStyles } from "./MovieStyle";

export default function Movie(props) {
  const classes = movieStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image="https://s3img.vcdn.vn/mobile/123phim/2020/10/tiec-trang-mau-blood-moon-party-16016226514166_215x318.png"
            title="Contemplative Reptile"
          />
          <div className={classes.overlay}></div>
          {props.type === "beingSold" ? (
            <React.Fragment>
              <CardContent className={classes.content}>
                <Box display="flex">
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.buttonAge}
                  >
                    C18
                  </Button>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Đang chiếu
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  variant="h5"
                  color="textPrimary"
                  component="h2"
                  className={classes.title}
                >
                  Tiệc trăng máu
                </Typography>
              </CardContent>
              <Button
                color="primary"
                className={classes.ticketButton}
                variant="contained"
              >
                Đặt vé
              </Button>
              <Button variant="contained" className={classes.score}>
                9.2
              </Button>
            </React.Fragment>
          ) : (
            <Button variant="contained" className={classes.dayStart}>
              04.12.2020
            </Button>
          )}
        </CardActionArea>
      </Card>
    </div>
  );
}
