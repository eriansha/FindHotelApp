import MainText from '../../atoms/main-text';
import React from 'react';
import {View} from 'react-native';

const OrderScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MainText>Order Screen</MainText>
    </View>
  );
};

export default OrderScreen;
