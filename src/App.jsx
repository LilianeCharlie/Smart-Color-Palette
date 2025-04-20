import React, { useState } from "react";
import { isValidCssColor, toHexColor } from "./utils/colorHelpers";
import "./styles/App.css";
import ColorPicker from "./components/ColorPicker";
import ColorInput from "./components/ColorInput";
import ColorDisplay from "./components/ColorDisplay";
import ContrastBox from "./components/ContrastBox";
import ThemeToggle from "./components/ThemeToggle";
import CopyButton from "./components/CopyButton";

const App = () => {
  const [selectedColor, setSelectedColor] = useState("#ff0000");

  return (
    <div className="app-container">
      <h1>Smart Color Palette</h1>

      <ColorPicker onChange={setSelectedColor} className="color-picker" />
      <ColorInput
        value={selectedColor}
        onChange={setSelectedColor}
        className="color-input"
      />

      <div
        className="color-preview"
        style={{
          marginTop: "2rem",
          height: "100px",
          backgroundColor: selectedColor,
          borderRadius: "8px",
        }}
      />
      <ColorDisplay />
      <ContrastBox />
      <ThemeToggle />
      <CopyButton />
    </div>
  );
};

export default App;
