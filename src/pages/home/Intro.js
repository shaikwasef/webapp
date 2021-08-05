import React from "react";
import IntroVideo from "../../assets/videos/homePage/home_intro_video.mp4";
import Video from "../../components/Video";
import "./Intro.css";

function Intro() {
  return (
    <div className="intro-video-container">
      <div className="intro-video-gradient"></div>
      <Video classname="home-intro-video" video={IntroVideo} />
    </div>
  );
}

export default Intro;
