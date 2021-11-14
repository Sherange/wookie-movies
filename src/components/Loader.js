import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import { primaryColor } from '../constants/theme';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large"  color={primaryColor}/>
    </View>
  );
};

export default Loader;
