import React from "react";
import IntroVideo from "../../assets/videos/homePage/home_intro_video.mp4";
import "./Intro.css";

function Intro() {
  return (
    <video playsInline autoPlay muted loop className="home-intro-video">
      <source src={IntroVideo} type="video/mp4" />
    </video>
  );
}

export default Intro;
