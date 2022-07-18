import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface LinkedTextProps {
  // TODO: provide link here
  // href?: string;
  children: string;
}

const LinkedText: React.FC<LinkedTextProps> = ({children}) => {
  return <Text style={styles.base}>{children}</Text>;
};

const styles = StyleSheet.create({
  base: {
    color: '#4E82EA',
    fontSize: 12,
  },
});

export default LinkedText;
