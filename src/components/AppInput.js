import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import { primaryTextColor } from '../constants/theme';

const AppInput = props => {
  const {placeholder} = props;
  return (
    <View style={styles.buttonContainer}>
      <Input placeholder={placeholder} inputStyle={styles.inputStyle} />
    </View>
  );
};

AppInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  inputStyle : {
    color : primaryTextColor
  }
});

export default AppInput;
