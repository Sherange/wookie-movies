import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {primaryTextColor, secondryColor, secondryTextColor} from "../../constants/theme";
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

const CardList = props => {
  const {data, genre} = props;

  const renderItem = ({item}) => (
    <MovieCard
      image={item.poster}
      title={item.title}
      classification={item.classification}
      length={item.length}
    />
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
};

export default CardList;
