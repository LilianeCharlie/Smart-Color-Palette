import React, { useState } from "react";
import { isValidCssColor, toHexColor } from "./utils/colorHelpers";
import "./styles/App.css";
import ColorPicker from "./components/ColorPicker";
import ColorInput from "./components/ColorInput";
import ColorDisplay from "./components/ColorDisplay";
import GradientCardList from "./components/GradientCardList";
import CopyButton from "./components/CopyButton";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#00A1F1");

  return (
    <div className="app-container">
      <h1>Smart Color Palette</h1>

      <div className="palette-wrapper">
        <ColorPicker onChange={setSelectedColor} className="color-picker" />
        <ColorInput
          value={selectedColor}
          onChange={setSelectedColor}
          className="color-input"
        />

        <ColorDisplay color={selectedColor} />
        <GradientCardList baseColor={selectedColor} />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default App;
