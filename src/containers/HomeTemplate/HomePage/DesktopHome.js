import React from "react";
import CarouselHome from "../../../components/CarouselHome";
import AppPromotion from "./DesktopComponent/AppPromotion";
import CarouselFilmTab from "./DesktopComponent/CarouselFilmTab";
import CinemaSection from "./DesktopComponent/CinemaSection";

export default function DesktopHome() {
  return (
    <React.Fragment>
      <CarouselHome />
      <CarouselFilmTab />
      <CinemaSection />
      <AppPromotion />
    </React.Fragment>
  );
}
