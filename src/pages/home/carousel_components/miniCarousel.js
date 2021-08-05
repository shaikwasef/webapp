import React, { useCallback, useRef } from "react";
import { Fade } from "react-slideshow-image";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./MiniCarousel.css";
import "react-slideshow-image/dist/styles.css";

function MiniCarousel({
  direction,
  reference,
  slideRight,
  slideLeft,
  slideData,
}) {
  const slideRef = useRef(null);
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  return (
    <div>
      <div className="slide-container">
        <Fade ref={reference} {...properties}>
          {slideData.map((item, index) => {
            return (
              <div key={index} className="each-slide">
                <img className="lazy" src={item.url} alt="sample" />
              </div>
            );
          })}
        </Fade>
      </div>

      <div className="slide-container buttons">
        {direction === "right" ? (
          <button className="directions" onClick={slideRight}>
            <ArrowRightAltIcon fontSize="large" />
          </button>
        ) : (
          <button
            onClick={slideLeft}
            className="directions"
            onClick={slideLeft}
          >
            <ArrowRightAltIcon
              className="directions"
              fontSize="large"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default MiniCarousel;
