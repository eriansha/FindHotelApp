import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import theme from '../../../constant/theme';
import MainText from '../main-text';

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
});

const Badge: React.FC<BadgeProps> = ({style, label, onPress}) => {
  return (
    <TouchableOpacity style={[styles.base, style]} onPress={onPress}>
      <MainText
        color={theme.colors.dark}
        fontSize={theme.fontSizes.body}
        fontWeight="400"
      >
        {label}
      </MainText>
    </TouchableOpacity>
  );
};

export default Badge;
