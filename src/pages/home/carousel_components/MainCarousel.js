import React, { useCallback, useRef } from "react";
import { Fade } from "react-slideshow-image";
import "./MainCarousel.css";

function MainCarousel({ reference }) {
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };



  const slideImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <div className="home-main-carousel">
      <div className="main-slide-container">
        <Fade ref={reference} {...properties}>
          {slideImages.map((image, index) => {
            return (
              <div key={index} className="main-each-slide">
                <img className="lazy" src={image} alt="sample" />
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}

export default MainCarousel;
