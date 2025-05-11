import { colord } from "colord";

export function generateGradientShades(baseColor) {
  const base = colord(baseColor);
  
    const light1 = base.lighten(0.2).toHex();
    const light2 = base.lighten(0.1).toHex();
    const dark1 = base.darken(0.1).toHex();
    const dark2 = base.darken(0.25).toHex();

    return [light1, dark1, light2, dark2];
}
