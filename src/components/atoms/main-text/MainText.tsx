import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface MainTextProps {
  children: string;
  fontSize: number;
  color: string;
}

/**
 * MainText text
 * @param {string} children text
 * @param {number} fontSize font size
 */
const MainText: React.FC<MainTextProps> = ({children, fontSize, color}) => {
  return (
    <Text style={[styles.main, {fontSize: fontSize, color: color}]}>
      {children}
    </Text>
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
