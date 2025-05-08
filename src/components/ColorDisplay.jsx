import React from "react";
import styles from "./ColorDisplay.module.css";
import { toHexColor, getAccessibleTextColor } from "../utils/colorHelpers";

const ColorDisplay = ({ color }) => {
  const hex = color.startsWith("#") ? color : toHexColor(color);
  const textColor = getAccessibleTextColor(hex);

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
