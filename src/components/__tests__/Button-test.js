import 'react-native';
import React from 'react';
import AppButton from '../AppButton';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AppButton title={'Search'} />);
});

test('AppButton snapshot', () => {
  const snapshot = renderer.create(<AppButton title={'Search'} />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
