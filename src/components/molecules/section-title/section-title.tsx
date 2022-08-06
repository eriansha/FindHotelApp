import MainText from '../../atoms/main-text';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinkedText from '../../atoms/linked-text';

interface SectionTitleProps {
  label: string;
  withoutLink?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({label, withoutLink}) => {
  return (
    <View style={styles.text}>
      <MainText fontWeight="700" fontSize={18}>
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
  },
});

export default SectionTitle;
