import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../../organisms/header';
import BalanceCard from '../../molecules/balance-card';
import HotelCardSlider from '../../organisms/hotel-card-slider';

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

        <HotelCardSlider />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  wrapper: {
    position: 'absolute',
    top: 80,
    width: '100%',
    alignItems: 'center',
  },
});
