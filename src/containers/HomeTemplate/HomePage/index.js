import React, { useEffect } from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";
import { actListMovieApi } from "./modules/ListMovie/action";
import { connect } from "react-redux";

function HomePage(props) {
  useEffect(() => {
    props.listMovieApi();
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
  };
};

export default connect(null, mapDispatchToProps)(withWidth()(HomePage));
