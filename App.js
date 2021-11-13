import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <TabNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
