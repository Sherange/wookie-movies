import React from 'react';
import {View, StyleSheet} from 'react-native';
import {backgroundColor, primaryTextColor} from '../../constants/theme';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';

const SearchScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={{marginHorizontal: 20}}>
        <AppInput placeholder={'Search title'} />
        <AppButton title={'Search'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  textStyle: {
    fontSize: 24,
    color: primaryTextColor,
  },
});

export default SearchScreen;
