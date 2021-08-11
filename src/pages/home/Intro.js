import React from "react";
import IntroVideo from "../../assets/videos/homePage/home_intro_video.mp4";
import ScrollingMouse from "../../components/ScrollingMouseComponent/ScrollingMouse";
import "./Intro.css";

//Intro component (with video and scrolling mouse animation)
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
