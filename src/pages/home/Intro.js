import React from "react";
import IntroVideo from "../../assets/videos/homePage/home_intro_video.mp4";
import ScrollingMouse from "../../components/ScrollingMouseComponent/ScrollingMouse";
import Video from "../../components/VideoComponent/Video";
import "./Intro.css";

function Intro({ onScrollClick }) {
  return (
    <div className="intro-video-container">
      <video playsInline autoPlay muted loop className="home-intro-video">
        <source src={IntroVideo} type="video/mp4" />
      </video>
      <div onClick={onScrollClick} className="intro-mouse-scroller">
        <ScrollingMouse />
      </div>
    </div>
  );
}

export default Intro;

{
  /* <div className="intro-video-gradient"></div>; */
}
