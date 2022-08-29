import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../../constant/theme';
import MainText from '../../atoms/main-text';
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
      <MainText
        style={styles.label}
        color={theme.colors.grey}
        fontSize={theme.fontSizes.caption}
        fontFamily={theme.fontFamilies.regular}
        fontWeight="400"
      >
        Your Locations
      </MainText>
      <TouchableOpacity onPress={onPress}>
        <MainText
          style={styles.location}
          fontSize={theme.fontSizes.title}
          fontFamily={theme.fontFamilies.medium}
          fontWeight="300"
        >
          <MainText
            fontSize={theme.fontSizes.title}
            fontFamily={theme.fontFamilies.medium}
            fontWeight="500"
          >
            {city}
          </MainText>
          {', '}
          {country}
        </MainText>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  location: {
    letterSpacing: 0.5,
  },
});

export default LocationPicker;
