import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MainText from '../../atoms/main-text';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>+</Text>
      <MainText fontSize={20} color={'#fff'}>
        Discover
      </MainText>
      <Text>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5589F0',
    paddingHorizontal: 24,
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 125,
  },
});
