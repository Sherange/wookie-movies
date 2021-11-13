import React from 'react';
import {View, StyleSheet, StatusBar, ScrollView} from 'react-native';
import {backgroundColor} from '../../constants/theme';
import {movie} from '../../constants/mockData';
import Header from './Header';
import MovieInfo from './MovieInfo';

const data = movie;

const DetailScreen = () => {
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

export default DetailScreen;
