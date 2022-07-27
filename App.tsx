import HomeScreen from './src/components/pages/home-screen';
import SearchScreen from './src/components/pages/search-screen';
import OrderScreen from './src/components/pages/order-screen';
import ProfileScreen from './src/components/pages/profile-screen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VectorImage from 'react-native-vector-image';
import {
  activeHomeIcon,
  inactiveHomeIcon,
  activeSearchIcon,
  searchIcon,
  activeOrderIcon,
  orderIcon,
  activeProfileIcon,
  profileIcon,
} from './src/assets';

const Tab = createBottomTabNavigator();
interface TabBarIconOptions {
  focused: boolean;
  color: string;
  size: number;
}

interface BottomBarIconType {
  option: TabBarIconOptions;
  activeIcon: number;
  inactiveIcon: number;
}

const BottomBarIcon: React.FC<BottomBarIconType> = ({
  option,
  activeIcon,
  inactiveIcon,
}) => {
  const {focused} = option;
  const icon = focused ? activeIcon : inactiveIcon;

  return <VectorImage source={icon} />;
};

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
            tabBarIcon: option => (
              <BottomBarIcon
                option={option}
                activeIcon={activeHomeIcon}
                inactiveIcon={inactiveHomeIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Search',
            tabBarIcon: option => (
              <BottomBarIcon
                option={option}
                activeIcon={activeSearchIcon}
                inactiveIcon={searchIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Order',
            tabBarIcon: option => (
              <BottomBarIcon
                option={option}
                activeIcon={activeOrderIcon}
                inactiveIcon={orderIcon}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profle"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Profile',
            tabBarIcon: option => (
              <BottomBarIcon
                option={option}
                activeIcon={activeProfileIcon}
                inactiveIcon={profileIcon}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
