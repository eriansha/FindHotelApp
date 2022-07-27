import LocationPicker from '../../molecules/location-picker';
import {Location} from '../../molecules/location-picker/LocationPicker';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const DUMMY_LOCATION: Location = {
  city: 'Bandung',
  country: 'Indonesia',
};

const SearchScreen: React.FC = () => {
  const handlePressLocation = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <LocationPicker location={DUMMY_LOCATION} onPress={handlePressLocation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default SearchScreen;
