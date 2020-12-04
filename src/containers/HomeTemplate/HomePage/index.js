import React, { useEffect } from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";
import { actListMovieApi } from "./modules/ListMovie/action";
import { connect } from "react-redux";
import { actListCinemaApi } from "./modules/ListCinema/action";

function HomePage(props) {
  useEffect(() => {
    props.listMovieApi();
    props.listCinemaApi();
  }, []);
  if (isWidthUp("sm", props.width)) {
    return <DesktopHome />;
  }

  return <MobileHome />;
}

const mapDispatchToProps = (dispatch) => {
  return {
    listMovieApi: () => {
      dispatch(actListMovieApi("now"));
    },
    listCinemaApi: () => {
      dispatch(actListCinemaApi());
    },
  };
};

export default connect(null, mapDispatchToProps)(withWidth()(HomePage));
