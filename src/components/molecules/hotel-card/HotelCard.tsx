import MainText from '../../atoms/main-text';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Caption from '../../atoms/caption';
import PriceUtils from '../../../utils/price-utils';
import VectorImage from 'react-native-vector-image';

import {starIcon, pinIcon} from '../../../assets';
import theme from '../../../constant/theme';

interface HotelCardProps {
  hotel: {
    thumbnail: any;
    name: string;
    location: string;
    rate: number;
    price: number;
  };
}

const HotelCard: React.FC<HotelCardProps> = ({hotel}) => {
  const priceUtils = new PriceUtils();
  const parsedPrice = priceUtils.format(hotel.price);

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={hotel.thumbnail} />

      <View style={[styles.baseText, styles.mainText]}>
        <View>
          <MainText fontWeight="500" fontSize={theme.fontSizes.title}>
            {hotel.name}
          </MainText>

          <View style={styles.icon}>
            <VectorImage style={{marginRight: 10}} source={pinIcon} />
            <Caption fontSize={theme.fontSizes.body}>{hotel.location}</Caption>
          </View>
        </View>

        <View style={styles.icon}>
          <Caption fontSize={theme.fontSizes.body}>{hotel.rate}</Caption>
          <VectorImage style={{marginLeft: 10}} source={starIcon} />
        </View>
      </View>

      {/* TODO: need to make dynamic margin */}
      <View style={styles.dividen} />

      <View style={[styles.baseText, styles.priceText]}>
        <View>
          <Caption fontSize={theme.fontSizes.caption}>
            Price Start from:
          </Caption>
        </View>

        <View>
          <MainText
            color={theme.colors.primary}
            fontSize={theme.fontSizes.body}
            fontWeight="bold"
          >
            {parsedPrice}{' '}
            <Caption fontSize={theme.fontSizes.caption}>/night</Caption>
          </MainText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 350,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 15,
  },
  thumbnail: {
    width: 256,
    height: 200,
    borderRadius: 10,
  },
  dividen: {
    borderBottomColor: theme.colors.fade,
    borderBottomWidth: 1,
    marginHorizontal: -15,
    marginVertical: 10,
  },
  baseText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  mainText: {
    marginTop: 15,
    marginBottom: 10,
  },
  priceText: {
    marginBottom: 15,
  },
  icon: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default HotelCard;
