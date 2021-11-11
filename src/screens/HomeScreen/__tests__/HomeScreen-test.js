import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../index';

it('renders correctly', () => {
  renderer.create(<HomeScreen />);
});

test('Home snapshot', () => {
  const snapshot = renderer.create(<HomeScreen />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
