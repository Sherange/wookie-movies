import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <TabNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
