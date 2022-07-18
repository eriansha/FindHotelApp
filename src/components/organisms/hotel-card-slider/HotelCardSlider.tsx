import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
} from 'react-native';
import HotelCard from '../../molecules/hotel-card';
import SectionTitle from '../../molecules/section-title';

import {mainHotel1, mainHotel2} from '../../../assets';

const HOTELS: Hotel[] = [
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

interface HotelCardSliderProps {
  onPressHotel: () => void;
}

const HotelCardSlider: React.FC<HotelCardSliderProps> = ({onPressHotel}) => {
  const renderItem: ListRenderItem<Hotel> = ({item}) => (
    <TouchableOpacity onPress={onPressHotel}>
      <HotelCard key={item.id} hotel={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.base}>
      <SectionTitle label="Recommended Hotels" />

      <FlatList
        horizontal
        data={HOTELS}
        renderItem={renderItem}
        keyExtractor={item => `hotel-slider-${item.id}`}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
  },
});

export default HotelCardSlider;
