import React from "react";
import styles from "./ColorDisplay.module.css";
import { toHexColor, getAccessibleTextColor } from "../utils/colorHelpers";
import CopyButton from "./CopyButton";

const ColorDisplay = ({ color }) => {
  const hex = color.startsWith("#") ? color : toHexColor(color);
  const textColor = getAccessibleTextColor(hex);

  return (
    <div
      className={styles.colorDisplay}
      style={{ backgroundColor: hex, color: textColor }}
    >
      <div className={styles.hexStack}>
        <div>
          Background:{" "}
          <span className="copy-wrapper">
            {hex} <CopyButton value={hex} />
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

export default ColorDisplay;
