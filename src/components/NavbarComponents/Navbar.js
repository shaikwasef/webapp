import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import NeomLogo from "../../assets/logos/neom_logo.png";
import "./Navbar.css";
import Fade from "react-reveal/Fade";
import "../../Styles/common.css";

// Navbar switches between two different heights depending on its position
const mainNavBarHeight = 120;
const newNavBarHeight = 100;

//classes to implement navbar animation
const useStyles = makeStyles((theme) => ({
  defaultNavbar: {
    "&.MuiAppBar-root": {
      height: mainNavBarHeight.toString() + "px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
    position: "fixed",
    backgroundColor: "transparent",
    height: mainNavBarHeight.toString() + "px",
  },

  mainPageNavbar: {
    "&.MuiAppBar-root": {
      height: mainNavBarHeight.toString() + "px",
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
      height: mainNavBarHeight.toString() + "px",
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
      height: newNavBarHeight.toString() + "px",
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
  //sets state depending on navbar position (refer transitionNavBar)
  const [navbarStatus, setNavbarStatus] = useState("default");

  //Attaches event listener to window on mount
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  //sets the state of the Navbar depending on its position
  function transitionNavBar() {
    if (this.oldScroll > this.scrollY && window.scrollY > window.innerHeight) {
      setNavbarStatus("up_other_screen");
      console.log("up_other_screen");
    } else if (
      this.oldScroll > this.scrollY &&
      window.scrollY < window.innerHeight - newNavBarHeight + 20
    ) {
      setNavbarStatus("up_main_screen");
      console.log("up_main_screen");
    } else if (this.oldScroll < this.scrollY) {
      setNavbarStatus("down");
      console.log("down");
    }
    this.oldScroll = this.scrollY;
  }

  //choose navabar class depending on the state
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
    // Force navbar animation irrespective of position of scroll
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
