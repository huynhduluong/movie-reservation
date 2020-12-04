import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { cinemaArr } from "../CinemaShowTime/CinemaSystem";

const useStyle = makeStyles((theme) => ({
  root: {
    minHeight: "705px",
    width: "100%",
    padding: 0,
    overflowY: "hidden",
    background: theme.palette.background.paper,
  },
  listItem: {
    padding: "20px",
    width: "100%",
    transition: "all 0.2s",
    cursor: "pointer",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  avatar: {
    width: "50px",
    height: "50px",
  },
  itemText: {
    margin: 0,
    paddingLeft: 10,
  },
  address: {
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    display: "block",
  },
  detail: {
    fontSize: 12,
    color: theme.status.red,
  },
  divider: {
    backgroundColor: "#ebebec",
    opacity: 0.5,
  },
}));

export default function CinemaList() {
  const classes = useStyle();
  return (
    <List className={classes.root}>
      {cinemaArr[0].lstCumRap.map((cinema, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start" className={classes.listItem}>
              <ListItemAvatar>
                <Avatar
                  variant="square"
                  alt="Remy Sharp"
                  src="https://s3img.vcdn.vn/123phim/2018/09/bhd-star-bitexco-15379552241200.jpg"
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      {cinema.tenCumRap}
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.address}
                      color="textSecondary"
                    >
                      {cinema.diaChi}
                    </Typography>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.detail}
                    >
                      [chi tiết]
                    </Typography>
                  </React.Fragment>
                }
                className={classes.itemText}
              />
            </ListItem>
            <Divider
              variant="middle"
              component="li"
              className={classes.divider}
            />
          </React.Fragment>
        );
      })}
    </List>
  );
}
