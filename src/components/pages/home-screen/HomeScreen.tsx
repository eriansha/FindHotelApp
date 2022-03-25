import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../../organisms/header';
import BalanceCard from '../../molecules/balance-card';

const DUMMY_BALANCE = '9.200.301';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.wrapper}>
        <BalanceCard currentBalance={DUMMY_BALANCE} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  wrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    top: 70,
  },
});
