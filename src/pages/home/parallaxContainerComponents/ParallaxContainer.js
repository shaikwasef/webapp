import React, { useEffect } from "react";
import "./ParallaxContainer.css";

function ParallaxContainer() {
  useEffect(() => {
    const element = document.getElementById("parallax-div");
    window.addEventListener("scroll", function () {
      if (window.scrollY > element.offsetWidth + 70 + element.clientHeight) {
        element.classList.add("parallax-background-bottom");
        element.classList.remove("parallax-background");
      } else {
        element.classList.remove("parallax-background-bottom");
        element.classList.add("parallax-background");
      }
    });
  }, []);
  return (
    <div className="parallax-container">
      <div className="parallax-background " id="parallax-div">
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
