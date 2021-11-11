import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import DetailScreen from '../index';

it('renders correctly', () => {
  renderer.create(<DetailScreen />);
});
