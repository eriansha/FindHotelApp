import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import SectionTitle from '../../molecules/section-title';
import HotelItem from '../../molecules/hotel-item';

import {hotelItem2, hotelItem3, hotelItem4} from '../../../assets';
import LinkedText from '../../atoms/linked-text';
import {INFO_TYPE} from '../../molecules/hotel-item/HotelItem';

const HOTELS = [
  {
    id: 1,
    thumbnail: hotelItem2,
    name: 'GH Setiabuddy',
    location: 'Setiabuddy, Bandung',
    distance: 0.1,
    distanceUnit: 'km',
  },
  {
    id: 2,
    thumbnail: hotelItem3,
    name: 'Damsaurus Hotel',
    location: 'Pasteur, Bandung',
    distance: 1.6,
    distanceUnit: 'km',
  },
  {
    id: 3,
    thumbnail: hotelItem4,
    name: 'Andjoy Hotel',
    location: 'Kebon Jaty, Bandung',
    distance: 2.2,
    distanceUnit: 'km',
  },
];

interface Hotel {
  id: number;
  thumbnail: string;
  name: string;
  location: string;
  distance: number;
}

interface NearbyHotelSectionProps {
  onPressItem: () => void;
}

const NearbyHotelSection: React.FC<NearbyHotelSectionProps> = ({
  onPressItem,
}) => {
  return (
    <View style={styles.base}>
      <SectionTitle label="Nearby You" withoutLink />

      {HOTELS.map((hotel: Hotel) => (
        <TouchableOpacity key={hotel.id} onPress={onPressItem}>
          <HotelItem hotel={hotel} infoType={INFO_TYPE.DISTANCE} />
        </TouchableOpacity>
      ))}

      <LinkedText style={styles.loadMoreText}>{'Load More'}</LinkedText>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    marginVertical: 20,
  },
  loadMoreText: {
    marginTop: 24,
    alignSelf: 'center',
  },
});

export default NearbyHotelSection;
