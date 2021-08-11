import React from "react";
import { Typography } from "@material-ui/core";
import { Fade } from "react-slideshow-image";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import "./MiniCarousel.css";
import "../../../Styles/common.css";
import "react-slideshow-image/dist/styles.css";

function MiniCarousel({
  direction,
  reference,
  slideRight,
  slideLeft,
  slideData,
  textSide,
}) {
  const alignment = textSide === "left" ? "start" : "end";

  const useStyles = makeStyles((theme) => ({
    name: {
      "&.MuiTypography-h5": {
        fontSize: "16px",
        color: "black",
        textAlign: alignment,
        fontWeight: "bolder",
      },
    },
    designation: {
      "&.MuiTypography-h6": {
        fontSize: "12px",
        color: "rgb(150, 150, 150)",
        textAlign: alignment,
        width: "max-content",
      },
    },
  }));

  const classes = useStyles();
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  //Mini carousel component
  return (
    <div>
      <div
        className={clsx(
          "slide-container",
          {
            "slide-container-left": textSide === "left",
          },
          {
            "slide-container-right": textSide === "right",
          }
        )}
      >
        <Fade ref={reference} {...properties}>
          {slideData.map((item, index) => {
            return (
              <div
                key={index}
                className={clsx(
                  "each-slide",
                  "d-flex",
                  "flex-column",
                  { "align-items-start": textSide === "left" },
                  { "align-items-end": textSide === "right" }
                )}
              >
                <article
                  className={clsx(
                    "d-flex",
                    "flex-column",
                    "mb-40 ",
                    {
                      "align-self-start article-start": textSide === "left",
                    },
                    {
                      "align-self-end article-end ": textSide === "right",
                    }
                  )}
                >
                  <Typography variant="h5" className={classes.name}>
                    {item.name}
                  </Typography>
                  <Typography variant="h6" className={classes.designation}>
                    {item.designation}
                  </Typography>
                </article>
                <img className="lazy" src={item.url} alt="sample" />
              </div>
            );
          })}
        </Fade>
      </div>

      <div className=" slide-container buttons">
        {direction === "right" ? (
          <ArrowRightAltIcon
            fontSize="large"
            className="directions right-arrow"
            onClick={slideRight}
          />
        ) : (
          <ArrowRightAltIcon
            fontSize="large"
            onClick={slideLeft}
            className="directions left-arrow"
            style={{ transform: "rotate(180deg)" }}
          />
        )}
      </div>
    </div>
  );
}

export default MiniCarousel;
