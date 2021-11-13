import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../MovieCard';

const testData = {
  classification: '13+',
  length: '2h 32min',
  poster:
    'https://wookie.codesubmit.io/static/posters/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8.jpg',
  title: 'The Dark Knight',
};

it('renders correctly', () => {
  renderer.create(
    <MovieCard
      image={testData.poster}
      title={testData.title}
      classification={testData.classification}
      length={testData.length}
      navigateDetailScreen={() => {}}
    />,
  );
});

test('MovieCard snapshot', () => {
  const snapshot = renderer
    .create(
      <MovieCard
        image={testData.poster}
        title={testData.title}
        classification={testData.classification}
        length={testData.length}
        navigateDetailScreen={() => {}}
      />,
    )
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});
