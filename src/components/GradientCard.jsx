import React from "react";
import "./GradientCard.css";

const GradientCard = ({ color, label }) => {
  return (
    <div
      className={`gradient-card ${
        label === "Selected Color" ? "selected" : ""
      }`}
      style={{ backgroundColor: color }}
    >
      {label && <div className="gradient-card-label">{label}</div>}
      <div className="gradient-card-hex">{color}</div>
    </div>
  );
};

export default GradientCard;
