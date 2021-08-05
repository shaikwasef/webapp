import React, { useCallback, useRef } from "react";
import { Fade } from "react-slideshow-image";
import image from "../../../assets/images/homePage/carousel/Joseph.jpeg";
import "./MainCarousel.css";

function MainCarousel({ reference, slideData }) {
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  console.log(slideData);
  return (
    <div className="home-main-carousel">
      <div className="main-slide-container">
        <Fade ref={reference} {...properties}>
          {slideData.map((item, index) => {
            return (
              <div key={index} className="main-each-slide">
                <img className="lazy" src={item.url} alt="sample" />
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}

export default MainCarousel;
