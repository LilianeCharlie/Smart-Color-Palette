import React from "react";
import { getAccessibleTextColor } from "../utils/colorHelpers";
import "./GradientCard.css";

const GradientCard = ({ color }) => {
  const textColor = getAccessibleTextColor(color);

  return (
    <div
      className="gradient-card"
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      <div className="gradient-card-hex">{color}</div>
    </div>
  );
};

export default GradientCard;
