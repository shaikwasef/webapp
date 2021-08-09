import React from "react";
import "./InfoSnippet.css";
import "../../../Styles/common.css";

function InfoSnippet() {
  return (
    <>
      <div className="info-snippet-container d-flex">
        <h1 className="info-snippet-value">
          26,500KM<sup style={{ fontSize: "45px" }}>2</sup>
        </h1>
        <h5 className="info-snippet-desc">IN SAUDI ARABIA</h5>
      </div>
    </>
  );
}

export default InfoSnippet;
