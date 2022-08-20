import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';
import theme from '../../../constant/theme';

interface CaptionProps {
  children: ReactNode;
  fontSize: number;
}

/**
 * Caption text
 * @param {string} children text
 * @param {number} fontSize font size
 */
const Caption: React.FC<CaptionProps> = ({children, fontSize}) => {
  return <Text style={[styles.main, {fontSize: fontSize}]}>{children}</Text>;
};

const styles = StyleSheet.create({
  main: {
    //fontFamily: 'Poppins-Light',
    color: theme.colors.grey,
    lineHeight: 21,
    fontWeight: 'normal',
  },
});

export default Caption;
