import { Typography } from "@material-ui/core";
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionVideo from "./DescriptionVideo";
import Fade from "react-reveal/Fade";
import "./Description.css";

const useStyles = makeStyles((theme) => ({
  descriptionHeading: {
    "&.MuiTypography-h1": {
      fontWeight: "600",
      fontSize: "50px",
      letterSpacing: "0.12em",
    },
  },
  description: {
    fontSize: "20px",
  },
}));

function Description({ reference }) {
  const classes = useStyles();
  return (
    <Fragment>
      <div ref={reference} className="description-container ">
        <article className="description-content d-flex flex-column align-items-start">
          <Fade bottom>
            <Typography variant="h6" style={{ color: "#ffc107" }}>
              NEOM
            </Typography>
          </Fade>

          <h1 className="description-heading">
            {"IS A NEW VISION OF WHAT THE FUTURE COULD BE ."
              .split(" ")
              .map((item, index) => {
                return (
                  <Fade bottom delay={index * 50}>
                    {item}
                  </Fade>
                );
              })}
          </h1>

          <p className={classes.description}>
            NEOM is a new vision of what the future could be. It’s an attempt to
            do something that’s never been done before and it’s coming at a time
            when the world needs fresh thinking and new solutions. Put simply,
            NEOM will not only be a destination, but a home for people who dream
            big and who want to be part of building a new model for sustainable
            living.
          </p>
        </article>
      </div>
      <DescriptionVideo />
    </Fragment>
  );
}

export default Description;
