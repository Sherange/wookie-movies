import React, {useEffect} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import { setActionMovies } from '../../redux/movieSlice';
import {backgroundColor, primaryTextColor} from '../../constants/theme';
import {movies} from '../../constants/mockData';
import CardList from '../HomeScreen/CardList';

const HomeScreen = ({navigation}) => {
  
  const dispatch = useDispatch();
 
  //get state from redux-store
  const {actionMovies} = useSelector(state => state.movies);

  const navigateDetailScreen = data => {
    navigation.navigate('DetailScreen', data);
  };

  const fetchMovies = () => {
    dispatch(setActionMovies(movies));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={backgroundColor}
        translucent={true}
      />
      <View style={styles.homeScreen}>
        <Text style={styles.titleStyle}>Wookiee Movies</Text>

        <ScrollView>
          <CardList
            data={actionMovies}
            genre={'Action'}
            navigateDetailScreen={navigateDetailScreen}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  homeScreen: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
  },
  titleStyle: {
    color: primaryTextColor,
    fontSize: 24,
    fontWeight: '600',
    paddingVertical: 8,
    marginLeft: 20,
  },
});

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

export default HomeScreen;
