import React from "react";
import video from "../../../assets/videos/homePage/home_description_video.mp4";
import Video from "../../../components/Video";
import "./DescriptionVideo.css";

function DescriptionVideo() {
  return (
    <div className="description-video-container">
      <div className="video-gradient"></div>
      <Video classname="description-video" video={video} />
    </div>
  );
}

export default DescriptionVideo;
