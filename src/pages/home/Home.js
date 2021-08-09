import React, { useEffect, useRef, useState } from "react";
import Intro from "./Intro";
import "../../Styles/common.css";
import Description from "./descriptionComponents/Description";
import CarouselContainer from "./carouselComponents/CarouselContainer";
import ParallaxContainer from "./parallaxContainerComponents/ParallaxContainer";
import InfoContainer from "./infoContainerComponents/InfoContainer";

function Home() {
  const scrollRef = useRef(null);

  const onScrollClick = () => {
    debugger;
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" d-flex flex-column">
      <Intro onScrollClick={onScrollClick} />
      <Description reference={scrollRef} />
      <CarouselContainer />
      <ParallaxContainer />
      <InfoContainer />
    </div>
  );
}

export default Home;
