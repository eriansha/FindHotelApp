import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface Location {
  country: string;
  city: string;
}

interface LocationPickerProps {
  location: Location;
  onPress: () => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({location, onPress}) => {
  const {country, city} = location;

  return (
    <>
      <Text style={styles.label}>Your Locations</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.location}>
          <Text style={styles.city}>{city}</Text>
          {', '}
          {country}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    //fontFamily: 'Poppins-Regular',
    letterSpacing: 0.5,
    color: '#B7B7B7',
    fontSize: 12,
    marginBottom: 4,
  },
  location: {
    letterSpacing: 0.5,
    //fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  city: {
    fontWeight: '700',
  },
});

export default LocationPicker;
