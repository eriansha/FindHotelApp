import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Header from '../../organisms/header';
import BalanceCard from '../../molecules/balance-card';
import HotelCardSlider from '../../organisms/hotel-card-slider';
import HotelListItem from '../../organisms/hotel-list-item';
import theme from '../../../constant/theme';

const DUMMY_BALANCE = 9200301;

export default function HomeScreen() {
  const handleOnPressTopUp = () => {};

  const handlerPressMenu = () => {};

  const handlerPressNotificationBell = () => {};

  const handlePressHotel = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceVertical>
        <Header
          hasNewNotif
          onPressMenu={handlerPressMenu}
          onPressNotificationBell={handlerPressNotificationBell}
        />

        <View style={styles.sections}>
          <View style={styles.balanceCardWrapper}>
            <BalanceCard
              currentBalance={DUMMY_BALANCE}
              onPressTopUp={handleOnPressTopUp}
            />
          </View>

          <HotelCardSlider onPressHotel={handlePressHotel} />

          <HotelListItem onPressItem={handlePressHotel} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.light,
  },
  sections: {
    flex: 1,
    paddingHorizontal: 20,
  },
  balanceCardWrapper: {
    width: '100%',
    top: -30,
    alignItems: 'center',
  },
});
