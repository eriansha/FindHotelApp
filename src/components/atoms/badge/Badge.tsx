import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface BadgeProps {
  style?: ViewStyle;
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: '#ffffff',
    borderColor: '#F1F1F1',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 100,
    paddingHorizontal: 22,
    paddingVertical: 6,
  },
  label: {
    color: '#2A2B3D',
    fontSize: 14,
    lineHeight: 21,
  },
});

const Badge: React.FC<BadgeProps> = ({style, label, onPress}) => {
  return (
    <TouchableOpacity style={[styles.base, style]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Badge;
