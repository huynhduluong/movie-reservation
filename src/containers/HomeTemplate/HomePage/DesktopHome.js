import React from "react";
import CarouselHome from "../../../components/CarouselHome";
import CarouselFilmTab from "./DesktopComponent/CarouselFilmTab";

export default function DesktopHome() {
  return (
    <React.Fragment>
      <CarouselHome />
      <CarouselFilmTab />
    </React.Fragment>
  );
}
