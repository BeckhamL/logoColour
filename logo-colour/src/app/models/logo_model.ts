import { LogoCategoryEnum } from "./logo_category_model";

export class LogoModel {
  img: string;
  name: string;
  colours: ColourModel[];
  category?: LogoCategoryEnum;
}

export class ColourModel {
  hex: string;
  rgb: string;
  cmyk: string;
}
