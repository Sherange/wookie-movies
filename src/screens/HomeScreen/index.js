import React from 'react';
import {SafeAreaView, View, StatusBar, Text, StyleSheet} from 'react-native';
import {backgroundColor, primaryTextColor} from '../../constants/theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <View style={styles.homeScreen}>
        <StatusBar barStyle={'light-content'} translucent={true} />

        <Text style={styles.titleStyle}>Home Screen</Text>
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
    alignItems: 'center',
  },
  titleStyle: {
    color: primaryTextColor,
    fontSize: 24,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default HomeScreen;
