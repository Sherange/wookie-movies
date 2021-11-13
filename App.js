import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigation from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <HomeStackNavigation />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
