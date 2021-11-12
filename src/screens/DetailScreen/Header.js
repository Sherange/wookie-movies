import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import {primaryColor, primaryTextColor, secondryTextColor} from '../../constants/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Header = props => {
  const {coverImage, thumbnailImage, title, rating} = props;
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        style={styles.coverImage}
        source={{uri: coverImage}}
        resizeMode={'cover'}
      />
      <View style={styles.thumbnailContainer}>
        <Image
          style={styles.thumbnailImage}
          source={{uri: thumbnailImage}}></Image>

        <View style={styles.ratingContainer}>
          <Text style={styles.titleStyle} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.ratingTextStyle}>
            {rating}
            <Text style={styles.ratingSubTextStyle}> /10 IMDb rating</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10,
  },
  thumbnailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * -0.15,
    marginHorizontal: 20,
  },
  titleStyle: {
    color: primaryTextColor,
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
    marginVertical: 4,
  },
  coverImage: {
    height: windowHeight * 0.3,
    width: windowWidth,
    opacity: 0.2,
  },
  thumbnailImage: {
    height: 200,
    width: 150,
  },
  ratingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  ratingTextStyle: {
    color: primaryColor,
    fontWeight: '900',
    marginLeft: 10,
    fontSize: 20,
  },
  ratingSubTextStyle: {
    color: secondryTextColor,
    fontSize: 14,
    fontWeight: '600',
  },
});

Header.propTypes = {
  coverImage: PropTypes.string.isRequired,
  thumbnailImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Header;
