import React, {ReactNode} from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../../constant/theme';
import MainText from '../main-text';

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
  return (
    <MainText
      style={styles.main}
      color={theme.colors.grey}
      fontSize={fontSize}
      fontFamily={theme.fontFamilies.regular}
      fontWeight="400"
    >
      {children}
    </MainText>
  );
};

const styles = StyleSheet.create({
  main: {
    lineHeight: 21,
    marginBottom: 0,
    fontWeight: 'normal',
  },
});

export default Caption;
