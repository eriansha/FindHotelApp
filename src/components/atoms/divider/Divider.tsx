import theme from '../../../constant/theme';
import React, {useMemo} from 'react';
import {View, StyleSheet, Dimensions, ViewStyle} from 'react-native';

interface DividerProps {
  width?: number | undefined;
  style?: ViewStyle;
}

const windowWidth = Dimensions.get('window').width;

const createStyles = (widthProps: number | undefined) =>
  StyleSheet.create({
    base: {
      width: widthProps || windowWidth,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: theme.colors.fade,
    },
  });

const Divider: React.FC<DividerProps> = ({style, width}) => {
  const styles = useMemo(() => createStyles(width), [width]);

  return <View style={[styles.base, style]} />;
};

export default Divider;
