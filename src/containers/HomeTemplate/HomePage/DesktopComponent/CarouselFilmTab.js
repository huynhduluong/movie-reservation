import React from "react";
import CarouselFilmComing from "../../../../components/CarouselMovie/CarouselFilmComing";
import CarouselFilmNow from "../../../../components/CarouselMovie/CarouselFilmNow";
import WithCarouselFilm from "../../../../components/CarouselMovie/WithCarouselFilm";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

const FilmNow = WithCarouselFilm(CarouselFilmNow);
const FilmComing = WithCarouselFilm(CarouselFilmComing);
const useStyles = makeStyles((theme) => ({
  carouselTabFilm: {
    paddingTop: "75px",
  },
  tabNormal: {
    backgroundColor: "transparent",
    border: "none",
    transition: "all .2s",
    lineHeight: "24px",
    height: "24px",
    fontSize: "16px",
    "&:hover": {
      fontSize: "20px",
    },
  },
  tabActive: {
    backgroundColor: "transparent",
    border: "none",
    transition: "all .2s",
    lineHeight: "24px",
    height: "24px",
    fontSize: "20px",
  },
}));

export default function CarouselFilmTab() {
  const [value, setValue] = React.useState("1");
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div id="carouselTabFilm" className={classes.carouselTabFilm}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          centered
          aria-label="simple tabs example"
        >
          <Tab
            label="Đang Chiếu"
            value="1"
            className={value === "1" ? classes.tabActive : classes.tabNormal}
          />
          <Tab
            label="Sắp Chiếu"
            value="2"
            className={value === "2" ? classes.tabActive : classes.tabNormal}
          />
        </Tabs>
        <TabPanel value="1">
          <FilmNow />
        </TabPanel>
        <TabPanel value="2">
          <FilmComing />
        </TabPanel>
      </TabContext>
    </div>
  );
}
