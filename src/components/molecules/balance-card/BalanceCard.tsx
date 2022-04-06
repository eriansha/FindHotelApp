import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import Caption from '../../atoms/caption';

import VectorImage from 'react-native-vector-image';
import MainText from '../../atoms/main-text';
import PriceUtils from '../../../utils/price-utils';

interface BalanceCardProps {
  currentBalance: number;
  onPressTopUp: (event: GestureResponderEvent) => void | undefined;
}

/**
 * Represent account balance information
 * @param {number|string} currentBalance - current account balance
 * @param {function} onPressTopUp - handler to top up new balance to the account
 */
export default function BalanceCard({
  currentBalance,
  onPressTopUp,
}: BalanceCardProps) {
  const priceUtils = new PriceUtils();
  const parsedBalance = priceUtils.format(currentBalance);

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContent}>
        <Caption fontSize={14}>Your Balance</Caption>
        <MainText fontWeight="700" fontSize={18} color={'#4E82EA'}>
          {parsedBalance}
        </MainText>
      </View>

      <TouchableOpacity onPress={onPressTopUp} style={styles.wrapperIcon}>
        <VectorImage source={require('../../../assets/icon/top-up-icon.svg')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    borderRadius: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
  },
  wrapperContent: {
    padding: 10,
  },
  wrapperIcon: {
    alignSelf: 'center',
    backgroundColor: '#E4EDFF',
    padding: 5,
    borderRadius: 4,
  },
});
