import {AppTheme} from './type';

const colors = {
  primary: '#4E82EA',
  dark: '#2A2B3D',
  light: '#FBFBFB',
  grey: '#B7B7B7',
  fade: '#F1F1F1',
  white: '#FFFFFF',
  black: '#000000',
  red: '#F2735B',
  darkBlue: '#6D9CFA',
  lightBlue: '#E4EDFF',
};

const fontSizes = {
  header: 18,
  title: 16,
  body: 14,
  caption: 12,
};

const fontFamilies = {
  black: 'Poppins-Black',
  bold: 'Poppins-Bold',
  semiBold: 'Poppins-SemiBold',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  light: 'Poppins-Light',
  extraLight: 'Poppins-ExtraLight',
};

const theme: AppTheme = {
  colors: colors,
  fontSizes: fontSizes,
  fontFamilies: fontFamilies,
};

export default theme;
