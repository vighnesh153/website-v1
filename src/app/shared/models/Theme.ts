import { ColorShade } from '@vighnesh153-shared/models/ColorShade';

export interface Theme {
  color1: string;
  color2: string;
  color3: string;
  color4: string;
  color5: string;
  majorTextColor: string;
  shades: {
    color1?: ColorShade,
    color2?: ColorShade,
    color3?: ColorShade,
    color4?: ColorShade,
    color5?: ColorShade
  };
}
