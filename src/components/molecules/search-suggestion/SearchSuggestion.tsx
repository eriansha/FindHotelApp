import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import SectionTitle from '../section-title';
import Badge from '../../atoms/badge/Badge';

interface SearchSuggestionProps {
  style?: ViewStyle;
  suggestedText: string[] | [];
  onPressSuggestion: () => void;
}

const styles = StyleSheet.create({
  searchSuggestionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const SearchSuggestion: React.FC<SearchSuggestionProps> = ({
  style,
  suggestedText,
  onPressSuggestion,
}) => {
  return (
    <View style={style}>
      <SectionTitle label="Latest Search" withoutLink />

      <View style={styles.searchSuggestionContainer}>
        {suggestedText.map((text, index) => (
          <Badge
            key={`latest-search-${text}-badge`}
            style={{
              marginLeft: index % suggestedText.length !== 0 ? 12 : 0,
              marginBottom: 12,
            }}
            label={text}
            onPress={onPressSuggestion}
          />
        ))}
      </View>
    </View>
  );
};

export default SearchSuggestion;
