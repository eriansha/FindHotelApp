import MainText from '../../atoms/main-text';
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HotelCard from '../../molecules/hotel-card';
import LinkedText from '../../atoms/linked-text';

import {mainHotel1, mainHotel2} from '../../../assets';

const HOTELS = [
  {
    id: 1,
    thumbnail: mainHotel1,
    name: 'Bimosaurus Hotel',
    location: 'Safari, Buitenzorg',
    rate: 4.9,
    price: 599999,
  },
  {
    id: 1,
    thumbnail: mainHotel2,
    name: 'Bali, Denpasar',
    location: 'Daino Sas Hotel',
    rate: 3.2,
    price: 450000,
  },
];

interface Hotel {
  id: number;
  thumbnail: string;
  name: string;
  location: string;
  rate: number;
  price: number;
}

const HotelCardSlider: React.FC = ({}) => {
  return (
    <View style={styles.base}>
      <View style={styles.text}>
        <MainText fontWeight="700" fontSize={18}>
          Recommended Hotels
        </MainText>
        <LinkedText>View All</LinkedText>
      </View>

      <ScrollView horizontal>
        {HOTELS.map((hotel: Hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    marginVertical: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

export default HotelCardSlider;
