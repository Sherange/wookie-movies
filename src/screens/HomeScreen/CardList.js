import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {secondryColor} from '../../constants/theme';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const CardList = props => {
  const {data, genre, navigateDetailScreen} = props;

  const renderItem = ({item}) => (
    <MovieCard item={item} navigateDetailScreen={navigateDetailScreen} />
  );

  return (
    <View style={styles.cardListContainer}>
      <Text style={styles.genreTitleText}>{genre}</Text>
      <View style={styles.cardListRow}>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardListContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  cardListRow: {
    flexDirection: 'row',
  },
  genreTitleText: {
    color: secondryColor,
  },
});

CardList.propTypes = {
  data: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  navigateDetailScreen: PropTypes.func.isRequired,
};

export default CardList;
