import React from 'react';
import {View} from 'react-native';
import MainText from '../../atoms/main-text';

const ProfileScreen: React.FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <MainText>Profile Screen</MainText>
    </View>
  );
};

export default ProfileScreen;
