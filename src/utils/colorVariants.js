import { colord } from "colord";

export function generateGradientShades(baseColor) {
  const base = colord(baseColor);
  return [
    base.lighten(0.3).toHex(),
    base.lighten(0.15).toHex(),
    base.toHex(),
    base.darken(0.15).toHex(),
  ];
}
