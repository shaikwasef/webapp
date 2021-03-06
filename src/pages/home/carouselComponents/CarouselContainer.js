import React, { useCallback, useRef } from "react";
import "./CarouselContainer.css";
import MiniCarousel from "./MiniCarousel";
import MainCarousel from "./MainCarousel";
import data from "./carouselData.json";
import Fade from "react-reveal/Fade";
import { Fragment } from "react";

//Main carousel component from page 3
function CarouselContainer() {
  const leftCarousel = useRef(null);
  const rightCarousel = useRef(null);
  const middleCarousel = useRef(null);

  const slideLeft = useCallback(() => {
    leftCarousel.current.goBack();
    middleCarousel.current.goBack();
    rightCarousel.current.goBack();
  });

  const slideRight = useCallback(() => {
    leftCarousel.current.goNext();
    middleCarousel.current.goNext();
    rightCarousel.current.goNext();
  });

  const shiftArrayBy = (shift, ...arr) => {
    for (let i = 0; i < shift; i++) {
      arr.unshift(arr.pop());
    }
    return arr;
  };

  // The carousel component contains two major carousels and one minor carousel
  return (
    <div className="home-carousel">
      <div className="carousel-container d-flex ">
        <Fade left>
          <MiniCarousel
            direction="left"
            reference={leftCarousel}
            slideLeft={slideLeft}
            slideRight={slideRight}
            slideData={shiftArrayBy(0, ...data)}
            textSide="left"
          />
        </Fade>
        <MainCarousel
          reference={middleCarousel}
          slideData={shiftArrayBy(1, ...data)}
        />

        <Fade right>
          <MiniCarousel
            direction="right"
            reference={rightCarousel}
            slideLeft={slideLeft}
            slideRight={slideRight}
            slideData={shiftArrayBy(2, ...data)}
            textSide="right"
          />
        </Fade>
      </div>
    </div>
  );
}

export default CarouselContainer;
