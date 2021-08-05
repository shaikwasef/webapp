import React, { useRef } from "react";
import "./CarouselContainer.css";
import MiniCarousel from "./MiniCarousel";
import MainCarousel from "./MainCarousel";

function CarouselContainer() {
  const leftCarousel = useRef(null);
  const rightCarousel = useRef(null);
  const middleCarousel = useRef(null);

  const slideLeft = () => {
    leftCarousel.current.goBack();
    middleCarousel.current.goBack();
    rightCarousel.current.goBack();
  };

  const slideRight = () => {
    leftCarousel.current.goNext();
    middleCarousel.current.goNext();
    rightCarousel.current.goNext();
  };

  return (
    <div className="home-carousel">
      <div className="carousel-container d-flex">
        <MiniCarousel
          direction="left"
          reference={leftCarousel}
          slideLeft={slideLeft}
          slideRight={slideRight}
        />
        <MainCarousel reference={middleCarousel} />
        <MiniCarousel
          direction="right"
          reference={rightCarousel}
          slideLeft={slideLeft}
          slideRight={slideRight}
        />
      </div>
    </div>
  );
}

export default CarouselContainer;
