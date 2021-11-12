import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from '../MovieInfo';

it('renders correctly', () => {
  renderer.create(
    <MovieInfo
      cast={['Heath Ledger', 'Aaron Eckhart']}
      overview={'overview here'}
      year={'2021'}
      duration={'2h 30min'}
      director={'Christian Bale'}
    />,
  );
});

test('MovieInfo snapshot', () => {
  const snapshot = renderer
    .create(
      <MovieInfo
        cast={['Heath Ledger', 'Aaron Eckhart']}
        overview={'overview here'}
        year={'2021'}
        duration={'2h 30min'}
        director={'Christian Bale'}
      />,
    )
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
