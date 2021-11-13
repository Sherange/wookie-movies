import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <DetailScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
