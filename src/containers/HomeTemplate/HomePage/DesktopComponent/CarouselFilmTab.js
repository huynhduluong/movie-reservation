import React from "react";
import CarouselFilmComing from "../../../../components/CarouselMovie/CarouselFilmComing";
import CarouselFilmNow from "../../../../components/CarouselMovie/CarouselFilmNow";
import WithCarouselFilm from "../../../../components/CarouselMovie/WithCarouselFilm";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabContext, TabPanel } from "@material-ui/lab";
import { DesktopHomeStyle } from "./DesktopHomeStyle";
import { connect } from "react-redux";
import { actListMovieApi } from "../modules/ListMovie/action";

const FilmNow = WithCarouselFilm(CarouselFilmNow);
const FilmComing = WithCarouselFilm(CarouselFilmComing);

function CarouselFilmTab(props) {
  const classes = DesktopHomeStyle();

  let value = props.carouselStatus || "now";

  const handleChange = (event, newValue) => {
    props.changeCarousel(newValue);
  };

  //renderCarousel coming or now follow by value
  const renderCarousel = (value) => {
    if (value === "now") {
      return (
        <TabPanel value="now">
          <FilmNow listMovie={props.listMovie} />
        </TabPanel>
      );
    } else {
      return (
        <TabPanel value="coming">
          <FilmComing listMovie={props.listMovie} />
        </TabPanel>
      );
    }
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
            value="now"
            className={value === "now" ? classes.tabActive : classes.tabNormal}
          />
          <Tab
            label="Sắp Chiếu"
            value="coming"
            className={
              value === "coming" ? classes.tabActive : classes.tabNormal
            }
          />
        </Tabs>
        {renderCarousel(value)}
      </TabContext>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCarousel: (newValue) => {
      dispatch(actListMovieApi(newValue));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    listMovie: state.listMovieReducer.listMovie,
    carouselStatus: state.listMovieReducer.carouselStatus,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselFilmTab);
