import { Avatar, Divider, List, ListItem, makeStyles } from "@material-ui/core";
import React from "react";

const cinemaArray = [
  {
    maHeThongRap: "BHDStar",
    tenHeThongRap: "BHD Star Cineplex",
    biDanh: "bhd-star-cineplex",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  },
  {
    maHeThongRap: "CGV",
    tenHeThongRap: "cgv",
    biDanh: "cgv",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
  },
  {
    maHeThongRap: "CineStar",
    tenHeThongRap: "CineStar",
    biDanh: "cinestar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
  },
  {
    maHeThongRap: "Galaxy",
    tenHeThongRap: "Galaxy Cinema",
    biDanh: "galaxy-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  },
  {
    maHeThongRap: "LotteCinima",
    tenHeThongRap: "Lotte Cinema",
    biDanh: "lotte-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  },
  {
    maHeThongRap: "MegaGS",
    tenHeThongRap: "MegaGS",
    biDanh: "megags",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
  },
];

const useStyle = makeStyles((theme) => ({
  root: {
    height: "705px",
    width: "92px",
    border: "1px solid #ebebec",
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    padding: 0,
  },
  listItem: {
    padding: "20px",
    transition: "all 0.2s",
    cursor: "pointer",
  },
  avatar: {
    width: "50px",
    height: "50px",
    opacity: 0.5,
    "&:hover": {
      opacity: 1,
    },
  },
  divider: {
    backgroundColor: "#ebebec",
    opacity: 0.5,
  },
}));

export default function LogoCinema(props) {
  const classes = useStyle();
  return (
    <List className={classes.root}>
      {cinemaArray.map((logo, index) => {
        return (
          <React.Fragment key={index}>
            <ListItem className={classes.listItem}>
              <Avatar
                alt={logo.tenHeThongRap}
                src={logo.logo}
                className={classes.avatar}
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
