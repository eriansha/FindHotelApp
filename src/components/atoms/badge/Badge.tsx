import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import theme from '../../../constant/theme';

interface BadgeProps {
  style?: ViewStyle;
  label: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.fade,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 100,
    paddingHorizontal: 22,
    paddingVertical: 6,
  },
  label: {
    color: theme.colors.dark,
    fontSize: theme.fontSizes.body,
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
