import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import { backgroundColor, primaryTextColor } from '../constants/theme';

const SearchStack = createNativeStackNavigator();

const SearchStackNavigation = () => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title : "Search Movies",
          headerTintColor : primaryTextColor,
          headerTitleAlign : 'left',
          headerStyle: {
            backgroundColor: backgroundColor,
          },
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackNavigation;
