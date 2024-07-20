interface IThemeGeneric<T> {
  [key: string]: T;
}

interface IFonts {
  [key: string]: string | number | IFonts;
}

interface IColors {
  black: IThemeGeneric<string>;
  white: IThemeGeneric<string>;
  grey: IThemeGeneric<string>;
  green: IThemeGeneric<string>;
  red: IThemeGeneric<string>;
  blue: IThemeGeneric<string>;
  yellow: IThemeGeneric<string>;
}

export default interface IThemeInterface {
  borders: string[];
  breakpoints: string[] | number[];
  colors: IColors;
  fontSizes: number[];
  radii: Array<string | number>;
  shape: IThemeGeneric<string>;
  space: number[];
  shadows: string[];
  transitions: {
    easing: IThemeGeneric<string>;
    duration: IThemeGeneric<number>;
  };
  typography: {
    base: IThemeGeneric<string>;
    variants: {
      body2: IThemeGeneric<string | number | IFonts>;
      body1: IThemeGeneric<string | number | IFonts>;
      button: IThemeGeneric<string | number | IFonts>;
      h1: IThemeGeneric<string | number | IFonts>;
      h2: IThemeGeneric<string | number | IFonts>;
      h3: IThemeGeneric<string | number | IFonts>;
      h4: IThemeGeneric<string | number | IFonts>;
      subtitle: IThemeGeneric<string | number | IFonts>;
      caption: IThemeGeneric<string | number | IFonts>;
      overline: IThemeGeneric<string | number | IFonts>;
    };
  };
  zIndex: IThemeGeneric<number>;
}
