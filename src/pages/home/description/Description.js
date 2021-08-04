import { Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DescriptionVideo from "./DescriptionVideo";
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
    fontSize: "25px",
  },
}));

function Description() {
  const classes = useStyles();
  return (
    <>
      <div className="description-container ">
        <article className="description-content d-flex flex-column align-items-start">
          <Typography variant="h6" style={{ color: "#ffc107" }}>
            NEOM
          </Typography>
          <Typography variant="h1" className={classes.descriptionHeading}>
            IS A NEW VISION OF WHAT THE FUTURE COULD BE .
          </Typography>
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
    </>
  );
}

export default Description;
