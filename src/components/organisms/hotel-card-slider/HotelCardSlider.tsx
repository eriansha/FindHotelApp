import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HotelCard from '../../molecules/hotel-card';
import SectionTitle from '../../molecules/section-title';

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
    id: 2,
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
      <SectionTitle label="Recommended Hotels" />

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
    marginTop: 20,
  },
});

export default HotelCardSlider;
