import React from "react";
import Intro from "./Intro";
import "../../Styles/common.css";
import Description from "./description_components/Description";
import CarouselContainer from "./carousel_components/CarouselContainer";

function Home() {
  return (
    <div className="d-flex flex-column">
      <Intro />
      <Description />
      <CarouselContainer />
    </div>
  );
}

export default Home;
