import React, { useState } from "react";
import { isValidCssColor, toHexColor } from "../utils/colorHelpers"; // Import helpers

const ColorInput = ({ value, onChange, className }) => {
  const [inputValue, setInputValue] = useState(value); // Track the value for user input

  const handleInputChange = (e) => {
    const color = e.target.value;
    setInputValue(color); // Keep the input value for free typing

    // Check if the color is valid and convert it to hex
    if (isValidCssColor(color)) {
      onChange(toHexColor(color)); //Convert to hex if valid
    }
  };

  return (
    <div className={className}>
      <label htmlFor="colorInput">Enter a color code:</label>
      <input
        type="text"
        id="colorInput"
        className="color-input-field"
        placeholder="Enter color name or hex"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ColorInput;
