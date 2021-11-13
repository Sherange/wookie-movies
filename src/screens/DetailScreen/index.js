import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {backgroundColor} from '../../constants/theme';
import Header from './Header';
import MovieInfo from './MovieInfo';
import PropTypes from 'prop-types';

const DetailScreen = props => {
  const data = props.route.params;
  return (
    <View style={styles.detailScreen}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent={true}
      />
      <Header
        coverImage={data.backdrop}
        thumbnailImage={data.poster}
        title={data.title}
        rating={data.imdb_rating}
      />
      <ScrollView>
        <MovieInfo
          cast={data.cast}
          overview={data.overview}
          year={data.released_on}
          duration={data.length}
          director={data.director}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  detailScreen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
});

DetailScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.shape({
    params: PropTypes.shape({
      backdrop: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imdb_rating: PropTypes.number.isRequired,
      cast: PropTypes.array.isRequired,
      overview: PropTypes.string.isRequired,
      released_on: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      director: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.array.isRequired,
      ]),
    }),
  }),
};

export default DetailScreen;
