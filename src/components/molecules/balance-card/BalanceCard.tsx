import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Caption from '../../atoms/caption';

import MainText from '../../atoms/main-text';

interface BalanceCardProps {
  currentBalance: number | string;
}

/**
 * Represent account balance information
 * @param {number|string} currentBalance - current account balance
 */
export default function BalanceCard({currentBalance}: BalanceCardProps) {
  // TODO: might use currency utils
  const balance = `IDR ${currentBalance}`;

  return (
    <View style={styles.container}>
      <View style={styles.wrapperContent}>
        <Caption fontSize={14}>Your Balance</Caption>
        <MainText fontSize={18} color={'#4E82EA'}>
          {balance}
        </MainText>
      </View>

      <Text style={styles.wrapperIcon}>+</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ffff',
  },
  wrapperContent: {
    padding: 10,
  },
  wrapperIcon: {
    alignSelf: 'center',
  },
});
