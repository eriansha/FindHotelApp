import HomeScreen from './src/components/pages/home-screen';
import SearchScreen from './src/components/pages/search-screen';
import OrderScreen from './src/components/pages/order-screen';
import ProfileScreen from './src/components/pages/profile-screen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorImage from 'react-native-vector-image';
import {activeHomeIcon, searchIcon, orderIcon, profileIcon} from './src/assets';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: () => <VectorImage source={activeHomeIcon} />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Search',
            tabBarIcon: () => <VectorImage source={searchIcon} />,
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Order',
            tabBarIcon: () => <VectorImage source={orderIcon} />,
          }}
        />
        <Tab.Screen
          name="Profle"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: () => <VectorImage source={profileIcon} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
