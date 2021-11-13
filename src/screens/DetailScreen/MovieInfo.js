import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PropTypes from 'prop-types';
import CastList from './CastList';
import {primaryTextColor, secondryColor} from '../../constants/theme'

const MovieInfo = props => {
  const {year, duration, overview, cast, director} = props;
  return (
    <View style={styles.movieInfoContainer}>
      <Text style={styles.movieInfoTextStyle} numberOfLines={1}>
        {year} | {duration} | {director}
      </Text>

      <Text style={styles.movieInfoSubTitle}>Overview</Text>

      <Text style={styles.movieDescriptionText}>{overview}</Text>

      <Text style={styles.movieInfoSubTitle}>Cast</Text>

      <CastList castList={cast} />
    </View>
  );
};

const styles = StyleSheet.create({
  movieInfoContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  movieInfoSubTitle: {
    color: primaryTextColor,
    fontSize: 16,
    marginVertical: 8,
  },
  movieInfoTextStyle: {
    color: secondryColor,
    letterSpacing: 4,
    fontSize: 14,
    marginVertical: 8,
  },
  movieDescriptionText: {
    color: primaryTextColor,
    opacity: 0.7,
    fontSize: 16,
    lineHeight: 25,
    marginVertical: 8,
  },
});

MovieInfo.propTypes = {
  year: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  director: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
  overview: PropTypes.string.isRequired,
  cast: PropTypes.array.isRequired,
};

export default MovieInfo;
