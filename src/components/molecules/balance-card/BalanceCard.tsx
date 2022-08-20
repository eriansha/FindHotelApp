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
import theme from '../../../constant/theme';

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
        <Caption fontSize={theme.fontSizes.body}>Your Balance</Caption>

        {/* Workaround */}
        <View style={{marginVertical: 3}} />

        <MainText
          fontWeight="700"
          fontSize={theme.fontSizes.header}
          color={theme.colors.primary}
        >
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
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
  },
  wrapperContent: {
    padding: 10,
  },
  wrapperIcon: {
    alignSelf: 'center',
    backgroundColor: theme.colors.lightBlue,
    padding: 5,
    borderRadius: 4,
  },
});
