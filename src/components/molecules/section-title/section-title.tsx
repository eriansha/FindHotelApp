import MainText from '../../atoms/main-text';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinkedText from '../../atoms/linked-text';

interface SectionTitleProps {
  label: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({label}) => {
  return (
    <View style={styles.text}>
      <MainText fontWeight="700" fontSize={18}>
        {label}
      </MainText>
      <LinkedText>View All</LinkedText>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default SectionTitle;
