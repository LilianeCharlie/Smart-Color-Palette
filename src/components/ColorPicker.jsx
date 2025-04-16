import React from "react";

const ColorPicker = ({ onChange, className }) => {
  return (
    <div className={className}>
      <label htmlFor="colorPicker">Pick a color:</label>
      <input
        type="color"
        id="colorPicker"
        className="color-input-field"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker;
