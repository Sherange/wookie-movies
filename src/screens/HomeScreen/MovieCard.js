import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import PropTypes from 'prop-types';
import {primaryTextColor} from '../../constants/theme';

const MovieCard = props => {
  const {image, title, classification, length} = props;
  return (
    <View style={styles.movieCardContainer}>
      <Image source={{uri: image}} style={{width: 150, height: 250}}></Image>
      <Text style={styles.titleStyle} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.subTitleStyle} numberOfLines={1}>
        {length} | {classification}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  movieCardContainer: {
    width: 150,
    marginRight: 10,
    marginVertical: 8,
  },
  titleStyle: {
    marginVertical: 4,
    color: primaryTextColor,
    fontSize: 16,
    fontWeight: '600',
  },
  subTitleStyle: {
    marginVertical: 2,
    color: primaryTextColor,
    opacity: 0.6,
    fontSize: 14,
  },
});

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  length: PropTypes.string.isRequired,
  classification: PropTypes.string.isRequired,
};

export default MovieCard;
