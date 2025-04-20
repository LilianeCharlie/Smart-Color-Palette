import React from "react";
import styles from "./ColorDisplay.module.css";
import { toHexColor } from "../utils/colorHelpers";

const getTextColor = (color) => {
  const hex = color.startsWith("#") ? color : toHexColor(color);
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 128 ? "#000" : "#fff";
};

const ColorDisplay = ({ color }) => {
  const hex = color.startsWith("#") ? color : toHexColor(color);
  const textColor = getTextColor(hex);

  return (
    <div
      className={styles.colorDisplay}
      style={{ backgroundColor: hex, color: textColor }}
    >
      <p>Hex Value: {hex}</p>
    </div>
  );
};

export default ColorDisplay;
