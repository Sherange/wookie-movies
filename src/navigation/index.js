import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchStackNavigation from './SearchStack';
import HomeStackNavigation from './HomeStack';
import {backgroundColor, primaryColor, primaryTextColor} from '../constants/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: backgroundColor, borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="home"
              size={30}
              color={focused ? primaryColor : primaryTextColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SearchStackNavigation}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="search"
              size={30}
              color={focused ? primaryColor : primaryTextColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
