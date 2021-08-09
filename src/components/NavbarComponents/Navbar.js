import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import NeomLogo from "../../assets/logos/neom_logo.png";
import "./Navbar.css";
import Fade from "react-reveal/Fade";
import "../../Styles/common.css";

//:TODO need to change logic for navbar

const introNavBarHeight = 120;
const newNavBarHeight = 80;

const useStyles = makeStyles((theme) => ({
  navbar: {
    "&.MuiAppBar-root": {
      height: introNavBarHeight.toString() + "px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
    position: "fixed",
  },

  newNavbar: {
    "&.MuiAppBar-root": {
      height: newNavBarHeight.toString() + "px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
    position: "fixed",
    backgroundColor: "#5E5E5E",
    animation: "$myEffectNavBar",
    animationFillMode: "forwards",
    animationDelay: "2000ms",
  },

  logo: {
    height: "60%",
    position: "relative",
    left: "200px",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [navbarStatus, setNavbatStatus] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  function transitionNavBar() {
    if (window.scrollY > window.innerHeight) {
      setNavbatStatus(true);
    } else {
      setNavbatStatus(false);
    }
  }

  return (
    <Fade delay={400}>
      <AppBar
        className={navbarStatus ? classes.newNavbar : classes.navbar}
        color="transparent"
      >
        <div className="navbar-container d-flex justify-content-between align-items-center">
          <img src={NeomLogo} className={classes.logo} alt="company-logo" />
          <div className="navbar-content-container common-grey-color d-flex justify-content-between align-items-center">
            <h3>HOME</h3>
            <h3>ABOUT</h3>
            <h3>CONTACT</h3>
          </div>
        </div>
      </AppBar>
    </Fade>
  );
}

export default Navbar;
