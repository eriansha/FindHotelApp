import React from 'react';
import {View, TextInput, StyleSheet, ViewStyle} from 'react-native';
import VectorImage from 'react-native-vector-image';
import {inactiveSearchIcon} from '../../../assets';
import theme from '../../../constant/theme';

const PLACEHOLDER_INPUT = 'Find your Favorite Hotels';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.fade,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 50,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  searhIcon: {
    marginLeft: 24,
    marginRight: 12,
    alignSelf: 'center',
  },
  textInput: {
    //fontFamily: 'Poppins-Regular',
    fontSize: theme.fontSizes.body,
    color: theme.colors.grey,
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
