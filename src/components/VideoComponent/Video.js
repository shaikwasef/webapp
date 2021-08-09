import React from "react";

function Video({ classname, video }) {
  return (
    <video playsInline autoPlay muted loop className={classname}>
      <source src={video} type="video/mp4" />
    </video>
  );
}

export default Video;
