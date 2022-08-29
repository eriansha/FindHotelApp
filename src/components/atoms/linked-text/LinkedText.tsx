import React from 'react';
import {TextStyle} from 'react-native';
import MainText from '../main-text/MainText';
import theme from '../../../constant/theme';

interface LinkedTextProps {
  // TODO: provide link here
  // href?: string;
  style?: TextStyle;
  children: string;
}

const LinkedText: React.FC<LinkedTextProps> = ({style, children}) => {
  return (
    <MainText
      style={style}
      color={theme.colors.primary}
      fontSize={theme.fontSizes.caption}
      fontFamily={theme.fontFamilies.medium}
      fontWeight="500"
    >
      {children}
    </MainText>
  );
};

export default LinkedText;
