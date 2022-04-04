import React, {ReactNode} from 'react';
import {StyleSheet, Text} from 'react-native';

interface MainTextProps {
  children: ReactNode;
  fontSize?: number;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
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
  fontSize = 12,
  fontWeight = 'normal',
  color = '#000',
}) => {
  return (
    <Text style={[styles.main, {fontSize, fontWeight, color}]}>{children}</Text>
  );
};

const styles = StyleSheet.create({
  main: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    lineHeight: 21,
    marginBottom: 5,
  },
});

export default MainText;
