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
import axios from 'axios';

import {
  setActionMovies,
  setThrillerMovies,
  setCrimeMovies,
} from '../../redux/movieSlice';
import {backgroundColor, primaryTextColor} from '../../constants/theme';
import {baseUrl, endPoints} from '../../constants/appConst';
import CardList from '../HomeScreen/CardList';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  //get state from redux-store
  const {actionMovies, thrillerMovies, crimeMovies} = useSelector(
    state => state.movies,
  );

  const navigateDetailScreen = data => {
    navigation.navigate('DetailScreen', data);
  };

  const fetchMovies = async () => {
    const responce = await axios.get(baseUrl + endPoints.movies, {
      headers: {Authorization: 'Bearer Wookie2019'},
    });
    if (responce && responce.status === 200) {
      const {movies} = responce.data;
      let actionMovies = [];
      let crimeMovies = [];
      let thrillerMovies = [];

      movies.map(item => {
        //find genre in movies
        item.genres.map(genre => {
          switch (genre) {
            case 'Action':
              actionMovies.push(item);
              break;
            case 'Crime':
              crimeMovies.push(item);
              break;
            case 'Thriller':
              thrillerMovies.push(item);
              break;
          }
        });
      });
      dispatch(setActionMovies(actionMovies));
      dispatch(setThrillerMovies(thrillerMovies));
      dispatch(setCrimeMovies(crimeMovies));
    }
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
          <CardList
            data={thrillerMovies}
            genre={'Thriller'}
            navigateDetailScreen={navigateDetailScreen}
          />
          <CardList
            data={crimeMovies}
            genre={'Crime'}
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
