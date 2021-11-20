import 'react-native';
import React from 'react';
import AppInput from '../AppInput';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AppInput placeholder={'Search title'} />);
});

test('AppInput snapshot', () => {
  const snapshot = renderer
    .create(<AppInput placeholder={'Search title'} />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
