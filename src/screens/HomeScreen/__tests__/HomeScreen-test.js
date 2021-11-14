import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import {store} from '../../../redux/store';
import HomeScreen from '../index';

it('renders correctly', () => {
  // renderer.create(
  //   <Provider store={store}>
  //     <HomeScreen />
  //   </Provider>,
  // );
});

test('Home snapshot', () => {
  // const snapshot = renderer
  //   .create(
  //     <Provider store={store}>
  //       <HomeScreen />
  //     </Provider>,
  //   )
  //   .toJSON();
  // expect(snapshot).toMatchSnapshot();
});
