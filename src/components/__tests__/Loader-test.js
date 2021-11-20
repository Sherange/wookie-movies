import 'react-native';
import React from 'react';
import Loader from '../Loader';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Loader />);
});

test('Loader snapshot', () => {
  const snapshot = renderer.create(<Loader />).toJSON();
  expect(snapshot).toMatchSnapshot();
});
