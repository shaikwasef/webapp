import React from "react";
import Intro from "./Intro";
import "../../Styles/common.css";
import Description from "./description/Description";

function Home() {
  return (
    <div className="d-flex flex-column">
      <Intro />
      <Description />
    </div>
  );
}

export default Home;
