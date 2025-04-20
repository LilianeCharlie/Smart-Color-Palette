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
