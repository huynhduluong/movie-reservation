import React from "react";
import CarouselHome from "../../../components/CarouselHome";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MobileHome from "./MobileHome";

function DesktopHome() {
  return (
    <React.Fragment>
      <CarouselHome />
    </React.Fragment>
  );
}
