import MainText from '../../atoms/main-text';
import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import LinkedText from '../../atoms/linked-text';
import theme from '../../../constant/theme';

interface SectionTitleProps {
  label: string;
  style?: ViewStyle;
  withoutLink?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({label, withoutLink}) => {
  return (
    <View style={styles.text}>
      <MainText
        fontSize={theme.fontSizes.header}
        fontFamily={theme.fontFamilies.semiBold}
        fontWeight="600"
      >
        {label}
      </MainText>
      {!withoutLink && <LinkedText>View All</LinkedText>}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});

export default SectionTitle;
