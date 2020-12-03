import React from "react";
import CarouselHome from "../../../components/CarouselHome";
import CarouselFilmTab from "./DesktopComponent/CarouselFilmTab";
import CinemaSection from "./DesktopComponent/CinemaSection";

export default function DesktopHome() {
  return (
    <React.Fragment>
      <CarouselHome />
      <CarouselFilmTab />
      <CinemaSection />
    </React.Fragment>
  );
}
