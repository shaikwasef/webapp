import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import NeomLogo from "../../assets/logos/neom_logo.png";
import "./Navbar.css";
import Fade from "react-reveal/Fade";
import "../../Styles/common.css";

//:TODO need to change logic for navbar

const introNavBarHeight = 120;
const newNavBarHeight = 100;

const useStyles = makeStyles((theme) => ({
  defaultNavbar: {
    "&.MuiAppBar-root": {
      height: introNavBarHeight.toString() + "px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
    position: "fixed",
    backgroundColor: "transparent",
    height: introNavBarHeight.toString() + "px",
  },

  mainPageNavbar: {
    "&.MuiAppBar-root": {
      height: introNavBarHeight.toString() + "px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
    position: "fixed",
    animation: `$mainNavBarEffect 1s ease-in-out`,
    animationFillMode: "forwards",
  },
  "@keyframes mainNavBarEffect": {
    "0%": {
      height: newNavBarHeight.toString() + "px",
    },
    "100%": {
      height: introNavBarHeight.toString() + "px",
      backgroundColor: "transparent",
    },
  },

  newUpNavBar: {
    "&.MuiAppBar-root": {
      height: newNavBarHeight.toString() + "px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
    position: "fixed",
    animation: `$effectUpNavBar 0.2s ease-in-out`,
    animationFillMode: "forwards",
  },
  "@keyframes effectUpNavBar": {
    "0%": {
      height: 0 + "px",
      overflow: "hidden",
    },
    "100%": {
      height: newNavBarHeight + "px",
      backgroundColor: "#1d1f22",
    },
  },

  newDownNavbar: {
    "&.MuiAppBar-root": {
      height: newNavBarHeight.toString() + "px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
    position: "fixed",
    animation: `$effectDownNavBar 1s ease-in-out`,
    animationFillMode: "forwards",
  },
  "@keyframes effectDownNavBar": {
    "0%": {
      height: introNavBarHeight.toString() + "px",
      backgroundColor: "transparent",
    },
    "100%": {
      height: 0 + "px",
      overflow: "hidden",
    },
  },
  logo: {
    height: "60%",
    position: "relative",
    left: "200px",
  },
}));

function Navbar() {
  const classes = useStyles();
  const [navbarStatus, setNavbarStatus] = useState("default");

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  function transitionNavBar() {
    if (this.oldScroll > this.scrollY && window.scrollY > window.innerHeight) {
      setNavbarStatus("up_other_screen");
    } else if (
      this.oldScroll > this.scrollY &&
      window.scrollY < window.innerHeight - newNavBarHeight + 20
    ) {
      setNavbarStatus("up_main_screen");
    } else if (this.oldScroll < this.scrollY) {
      setNavbarStatus("down");
    }
    this.oldScroll = this.scrollY;
  }

  function setNavBarClass() {
    if (navbarStatus === "default") {
      return classes.defaultNavbar;
    }
    if (navbarStatus === "up_main_screen") {
      return classes.mainPageNavbar;
    }
    if (navbarStatus === "down") {
      return classes.newDownNavbar;
    }
    if (navbarStatus === "up_other_screen") {
      return classes.newUpNavBar;
    }
  }

  return (
    <Fade delay={400} force>
      <AppBar className={setNavBarClass()} color="transparent">
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
