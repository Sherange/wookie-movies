import React from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {backgroundColor, primaryTextColor} from '../../constants/theme';
import {movies} from '../../constants/mockData';
import CardList from '../HomeScreen/CardList';

const data = movies;

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.homeScreen}>
        <StatusBar barStyle={'light-content'} translucent={true} />
        <Text style={styles.titleStyle}>Wookiee Movies</Text>

        <ScrollView>
          <CardList data={data} genre={'Action'} />
          <CardList data={data} genre={'Drama'} />
          <CardList data={data} genre={'Triller'} />
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
  },
  titleStyle: {
    color: primaryTextColor,
    fontSize: 24,
    fontWeight: '600',
    paddingVertical :8,
    marginLeft: 20,
  },
});

export default HomeScreen;
