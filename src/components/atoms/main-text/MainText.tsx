import {FontFamilies} from '../../../constant/type';
import React, {ReactNode} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import theme from '../../../constant/theme';

interface MainTextProps {
  children: ReactNode;
  style?: TextStyle;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  fontFamily?:
    | FontFamilies['black']
    | FontFamilies['bold']
    | FontFamilies['semiBold']
    | FontFamilies['medium']
    | FontFamilies['regular']
    | FontFamilies['light']
    | FontFamilies['extraLight'];
  color?: string;
}

/**
 * MainText text
 * @param {string} children text
 * @param {string} color text color
 * @param {number} fontSize font size
 * @param {string} fontWeight font weight
 */
const MainText: React.FC<MainTextProps> = ({
  children,
  style,
  fontSize = 12,
  fontWeight = 'normal',
  fontFamily = theme.fontFamilies.regular,
  color = theme.colors.black,
}) => {
  return (
    <Text
      style={[styles.base, style, {fontSize, fontWeight, color, fontFamily}]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    lineHeight: 21,
    marginBottom: 5,
  },
});

export default MainText;
