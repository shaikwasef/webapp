import React from "react";
import { Fade } from "react-slideshow-image";
import Fader from "react-reveal/Fade";
import "./MainCarousel.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { Button, makeStyles } from "@material-ui/core";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import "../../../Styles/common.css";

const useStyles = makeStyles((theme) => ({
  watch: {
    "&.MuiButton-text": {
      color: "white",
      fontSize: "16px",
    },
    width: "130px",
    borderRadius: "20px ",
    backgroundColor: " #b89535",
    "&.MuiButton-root": {
      "&:hover": {
        backgroundColor: "#f7c849",
      },
    },
  },
}));

//Main carouse component
function MainCarousel({ reference, slideData }) {
  const classes = useStyles();
  const properties = {
    duration: 5000,
    autoplay: false,
    transitionDuration: 500,
    arrows: false,
    infinite: true,
    easing: "ease",
  };

  return (
    <div className="home-main-carousel">
      <div className="main-slide-container">
        <Fade ref={reference} {...properties}>
          {slideData.map((item, index) => {
            return (
              <div key={index} className="main-each-slide d-flex ">
                <Fader bottom>
                  <img className="lazy" src={item.url} alt="sample" />
                </Fader>
                <Fader bottom>
                  <article className="d-flex flex-column flex-gap-20 main-carousel-article ">
                    <FormatQuoteIcon
                      style={{ fontSize: "100px" }}
                      className="quote-icon"
                    />
                    <h3 className="main-carousel-quote">{item.quote}</h3>
                    <div className="d-flex flex-column main-carousel-credentials">
                      <p style={{ fontWeight: "bolder" }}>{item.name}</p>
                      <p>{item.designation}</p>
                    </div>
                    <Button className={classes.watch}>
                      WATCH <PlayArrowOutlinedIcon />
                    </Button>
                  </article>
                </Fader>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
}

export default MainCarousel;
