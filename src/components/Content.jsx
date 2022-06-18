import React from "react";
import ImageOne from "../images/egg.jpeg";
import ImageTwo from "../images/egg-2.jpeg";

export default function Content() {
  return (
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl md-2">Egg Muffins</h2>
          <p>Crispy, delicious, and nutritious</p>
          <span>₹120</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl md-2">Egg Salad</h2>
          <p>Crispy, delicious, and nutritious</p>
          <span>₹100</span>
        </div>
      </div>
    </>
  );
}
