import React from "react";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MobileHome from "./MobileHome";
import DesktopHome from "./DesktopHome";

function HomePage(props) {
  if (isWidthUp("sm", props.width)) {
    return <DesktopHome />;
  }

  return <MobileHome />;
}

export default withWidth()(HomePage);
