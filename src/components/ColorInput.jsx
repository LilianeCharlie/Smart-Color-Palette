const ColorInput = ({ value, onChange, className }) => {
  return (
    <div className={className}>
      <label htmlFor="colorInput">Enter a color code:</label>
      <input
        type="text"
        id="colorInput"
        className="color-input-field"
        placeholder="#ff0000 / rgb(255,0,0) / hsl(0, 100%, 50%)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default ColorInput;
