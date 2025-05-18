import React from "react";
import { getAccessibleTextColor } from "../utils/colorHelpers";
import CopyButton from "./CopyButton";
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
      <div className="hex-stack">
        <div>
          Background:{" "}
          <span className="copy-wrapper">
            {color} <CopyButton value={color} />
          </span>
        </div>
        <div>
          Text:{" "}
          <span className="copy-wrapper">
            {textColor} <CopyButton value={textColor} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default GradientCard;
