import MainText from '../../atoms/main-text';
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import Caption from '../../atoms/caption';
import PriceUtils from '../../../utils/price-utils';
import VectorImage from 'react-native-vector-image';

import {starIcon, pinIcon} from '../../../assets';

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
          <MainText fontWeight="500" fontSize={16}>
            {hotel.name}
          </MainText>

          <View style={styles.icon}>
            <VectorImage style={{marginRight: 10}} source={pinIcon} />
            <Caption fontSize={14}>{hotel.location}</Caption>
          </View>
        </View>

        <View style={styles.icon}>
          <Caption fontSize={14}>{hotel.rate}</Caption>
          <VectorImage style={{marginLeft: 10}} source={starIcon} />
        </View>
      </View>

      {/* TODO: need to make dynamic margin */}
      <View style={styles.dividen} />

      <View style={[styles.baseText, styles.priceText]}>
        <View>
          <Caption fontSize={12}>Price Start from:</Caption>
        </View>

        <View>
          <MainText color="#4E82EA" fontSize={14}>
            {parsedPrice} <Caption fontSize={12}>/night</Caption>
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
    backgroundColor: '#fff',
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
    borderBottomColor: '#EEEEEE',
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
