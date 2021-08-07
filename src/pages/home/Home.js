import React from "react";
import Intro from "./Intro";
import "../../Styles/common.css";
import Description from "./descriptionComponents/Description";
import CarouselContainer from "./carouselComponents/CarouselContainer";
import ParallaxContainer from "./parallaxContainerComponents/ParallaxContainer";
import InfoContainer from "./infoContainerComponents/InfoContainer";

function Home() {
  return (
    <div className="d-flex flex-column">
      <Intro />
      <Description />
      <CarouselContainer />
      <ParallaxContainer />
      <InfoContainer />
    </div>
  );
}

export default Home;
