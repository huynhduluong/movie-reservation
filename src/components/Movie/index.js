import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { movieStyles } from "./MovieStyle";
import { Link } from "react-router-dom";

export default function Movie(props) {
  const classes = movieStyles();
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea
          className={classes.actionArea}
          component={Link}
          to="/phim"
        >
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
                  <span className={classes.buttonAge}>C18</span>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ textTransform: "uppercase" }}
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
              <span className={classes.ticketButton}>Đặt vé</span>
              <span className={classes.score}>9.2</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className={classes.dayStart}>04.12.2020</span>
            </React.Fragment>
          )}
        </CardActionArea>
      </Card>
    </React.Fragment>
  );
}
