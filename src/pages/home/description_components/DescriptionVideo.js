import React from "react";
import Video from "../../../assets/videos/homePage/home_description_video.mp4";
import "./DescriptionVideo.css";

function DescriptionVideo() {
  return (
    <div className="description-video-container">
      <div className="video-gradient"></div>
      <video playsInline autoPlay muted loop className="description-video">
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default DescriptionVideo;
