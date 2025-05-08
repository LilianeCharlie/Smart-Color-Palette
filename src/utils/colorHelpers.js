export const isValidCssColor = (color) => {
  const s = new Option().style;
  s.color = color;
  return s.color !== "";
};

export const toHexColor = (color) => {
  const ctx = document.createElement("canvas").getContext("2d");
  ctx.fillStyle = color;
  return ctx.fillStyle; // Converts named color or RGB to hex
};

export const getAccessibleTextColor = (hex) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 128 ? "#000" : "#fff";
};