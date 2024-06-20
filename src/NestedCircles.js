// src/NestedCircles.js

import React, { useState } from "react";
import "./NestedCircles.css";

const NestedCircles = () => {
  const [numberOfCircles, setNumberOfCircles] = useState(0);

  const handleInputChange = (event) => {
    setNumberOfCircles(parseInt(event.target.value) || 0);
  };

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < numberOfCircles; i++) {
      circles.push(
        <div
          key={i}
          className="circle"
          style={{
            width: `${200 - i * 20}px`,
            height: `${200 - i * 20}px`,
            margin: `${i * 10}px`,
          }}
        ></div>
      );
    }
    return circles;
  };

  return (
    <div className="container">
      <input
        type="number"
        value={numberOfCircles}
        onChange={handleInputChange}
        placeholder="Enter number of circles"
        className="circle-input"
      />
      <div className="rectangle">
        <div className="circles-container">{renderCircles()}</div>
      </div>
    </div>
  );
};

export default NestedCircles;
