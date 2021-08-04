import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import NeomLogo from "../../assets/logos/neom_logo.png";
import "./Navbar.css";
import "../../Styles/common.css";

const useStyles = makeStyles((theme) => ({
  navbar: {
    "&.MuiAppBar-root": {
      height: "120px",
    },
    borderBottom: "0.3px solid rgba(180, 180, 180,0.7)",
    "&.MuiPaper-elevation ": {
      boxShadow: "none",
    },
    width: "100vw",
  },

  logo: {
    height: "60%",
    position: "relative",
    left: "200px",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.navbar} color="transparent">
      <div className="navbar-container d-flex justify-content-between align-items-center">
        <img src={NeomLogo} className={classes.logo} alt="company-logo" />
        <div className="navbar-content-container common-grey-color d-flex justify-content-between align-items-center">
          <h3>HOME</h3>
          <h3>ABOUT</h3>
          <h3>CONTACT</h3>
        </div>
      </div>
    </AppBar>
  );
}

export default Navbar;
