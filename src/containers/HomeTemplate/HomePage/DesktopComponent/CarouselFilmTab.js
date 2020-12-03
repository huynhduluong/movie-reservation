import React from "react";
import CarouselFilmComing from "../../../../components/CarouselMovie/CarouselFilmComing";
import CarouselFilmNow from "../../../../components/CarouselMovie/CarouselFilmNow";
import WithCarouselFilm from "../../../../components/CarouselMovie/WithCarouselFilm";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import { DesktopHomeStyle } from "./DesktopHomeStyle";

const FilmNow = WithCarouselFilm(CarouselFilmNow);
const FilmComing = WithCarouselFilm(CarouselFilmComing);

export default function CarouselFilmTab() {
  const [value, setValue] = React.useState("1");
  const classes = DesktopHomeStyle();

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
