import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

interface LinkedTextProps {
  // TODO: provide link here
  // href?: string;
  style?: TextStyle;
  children: string;
}

const LinkedText: React.FC<LinkedTextProps> = ({style, children}) => {
  return <Text style={[styles.base, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  base: {
    color: '#4E82EA',
    fontSize: 12,
  },
});

export default LinkedText;
