import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import SearchScreen from '../index';

it('renders correctly', () => {
  renderer.create(<SearchScreen />);
});

test('SearchScreen snapshot', () => {
  const snapshot = renderer.create(<SearchScreen />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
