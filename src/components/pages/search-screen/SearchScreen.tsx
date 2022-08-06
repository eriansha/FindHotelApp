import LocationPicker from '../../molecules/location-picker';
import {Location} from '../../molecules/location-picker/LocationPicker';
import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../../atoms/search-bar/SearchBar';
import Divider from '../../atoms/divider/Divider';

const DUMMY_LOCATION: Location = {
  city: 'Bandung',
  country: 'Indonesia',
};

const SearchScreen: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchText, setSearchText] = useState<string>();

  const handlePressLocation = () => {};

  const handleChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceVertical contentContainerStyle={styles.content}>
        <LocationPicker
          location={DUMMY_LOCATION}
          onPress={handlePressLocation}
        />

        <SearchBar
          style={styles.searhBar}
          onChangeSearchText={handleChangeSearchText}
        />

        <Divider style={styles.divider} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  content: {
    padding: 24,
  },
  searhBar: {
    marginTop: 12,
    marginBottom: 24,
  },
  divider: {
    position: 'absolute',
    top: 150,
  },
});

export default SearchScreen;
