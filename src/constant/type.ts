export type Colors = {
  primary: string;
  dark: string;
  light: string;
  grey: string;
  fade: string;
  white: string;
  black: string;
  red: string;
  darkBlue: string;
  lightBlue: string;
};

export type FontSizes = {
  header: number;
  title: number;
  body: number;
  caption: number;
};

export type FontFamilies = {
  black: string;
  bold: string;
  semiBold: string;
  medium: string;
  regular: string;
  light: string;
  extraLight: string;
};

export type AppTheme = {
  colors: Colors;
  fontSizes: FontSizes;
  fontFamilies: FontFamilies;
};
