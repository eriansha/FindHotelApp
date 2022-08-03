import React from 'react';
import {View, TextInput, StyleSheet, ViewStyle} from 'react-native';
import VectorImage from 'react-native-vector-image';
import {inactiveSearchIcon} from '../../../assets';

const PLACEHOLDER_INPUT = 'Find your Favorite Hotels';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderColor: '#F1F1F1',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
    flexDirection: 'row',
  },
  searhIcon: {
    marginLeft: 24,
    marginRight: 12,
    alignSelf: 'center',
  },
  textInput: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#F1F1F1',
  },
});

interface SearchBarProps {
  style?: ViewStyle;
  onChangeSearchText: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({style, onChangeSearchText}) => {
  return (
    <View style={[styles.container, style]}>
      <VectorImage style={styles.searhIcon} source={inactiveSearchIcon} />

      <TextInput
        style={styles.textInput}
        onChangeText={onChangeSearchText}
        placeholder={PLACEHOLDER_INPUT}
      />
    </View>
  );
};

export default SearchBar;
