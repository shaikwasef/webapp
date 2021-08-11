import React from "react";
import "./InfoContainer.css";
import "../../../Styles/common.css";

//Page 5 component on Home page
function InfoContainer() {
  return (
    <div className="home-info-container d-flex flex-column justify-content-center">
      <div className="info-snippet-container m-auto">
        <div className="d-flex info-snippet">
          <h1 className="info-snippet-value">
            26,500KM<sup style={{ fontSize: "45px" }}>2</sup>
          </h1>
          <h5 className="info-snippet-desc">IN SAUDI ARABIA</h5>
        </div>
      </div>
      <div className="info-snippet-container m-auto d-flex justify-content-between">
        <div className="d-flex">
          <h1 className="info-snippet-value">5MIN</h1>
          <h5 className="info-snippet-desc">
            NATURE IS ALWAYS A SHORT WALK AWAY
          </h5>
        </div>
        <div className="d-flex">
          <h1 className="info-snippet-value">4HR</h1>
          <h5 className="info-snippet-desc">
            FLIGHT AWAY FROM 40% OF THE GLOBE
          </h5>
        </div>
        <div className="d-flex">
          <h1 className="info-snippet-value">100%</h1>
          <h5 className="info-snippet-desc">RENEWABLE ENERGY</h5>
        </div>
      </div>
      <div className="info-snippet-container m-auto d-flex justify-content-around">
        <div className="d-flex">
          <h1 className="info-snippet-value ">
            10<sup style={{ fontSize: "45px" }}>{"\u00b0"}</sup>C
          </h1>
          <h5 className="info-snippet-desc">COOLER THAN THE REST OF THE GCC</h5>
        </div>
        <div className="d-flex">
          <h1 className="info-snippet-value">
            20MJ/M<sup style={{ fontSize: "45px" }}>2</sup>
          </h1>
          <h5 className="info-snippet-desc">PERENNIAL SOLAR RESOURCES</h5>
        </div>
      </div>
    </div>
  );
}

export default InfoContainer;
