import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../../organisms/header';
import BalanceCard from '../../molecules/balance-card';

const DUMMY_BALANCE = 9200301;

export default function HomeScreen() {
  const handleOnPressTopUp = () => {};

  const handlerPressMenu = () => {};

  const handlerPressNotificationBell = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header
        onPressMenu={handlerPressMenu}
        onPressNotificationBell={handlerPressNotificationBell}
      />

      <View style={styles.wrapper}>
        <BalanceCard
          currentBalance={DUMMY_BALANCE}
          onPressTopUp={handleOnPressTopUp}
        />
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
    top: 80,
  },
});
