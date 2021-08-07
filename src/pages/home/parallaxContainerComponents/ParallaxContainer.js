import React from "react";
import "./ParallaxContainer.css";

function ParallaxContainer() {
  return (
    <div className="parallax-container">
      <div className="parallax-background ">
        <div className="parallax-content-container d-flex flex-column align-items-center">
          <div className="parallax-body d-flex flex-column flex-gap-40">
            <h5>THE LINE</h5>
            <h1>ENABLES FUTURE-PROOF URBANIZATION</h1>
            <h6>
              One of the main projects for NEOM is THE LINE, the core of its
              urban living.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallaxContainer;
