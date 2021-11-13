import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {backgroundColor, primaryTextColor} from '../../constants/theme';

const SearchScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },
  textStyle : {
    fontSize : 24,
    color : primaryTextColor
  }
});

export default SearchScreen;
