import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import CastList from '../CastList';

it('renders correctly', () => {
  renderer.create(<CastList castList={['Heath Ledger', 'Aaron Eckhart']} />);
});

test('CastList snapshot', () => {
  const snapshot = renderer
    .create(<CastList castList={['Heath Ledger', 'Aaron Eckhart']} />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
