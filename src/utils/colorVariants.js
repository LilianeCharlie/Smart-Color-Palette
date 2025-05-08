import { colord } from "colord";

export function generateGradientShades(baseColor) {
  const base = colord(baseColor);
  return [
    base.lighten(0.2).toHex(),
    base.lighten(0.1).toHex(),
    base.darken(0.1).toHex(),
    base.darken(0.25).toHex(),
  ];
}
