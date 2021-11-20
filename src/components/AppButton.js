import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

const AppButton = props => {
  const {title} = props;
  return (
    <View style={styles.buttonContainer}>
      <Button
        title={title}
        type="outline"
        // buttonStyle={{width: '100%'}}
        containerStyle={{width: '100%'}}
      />
    </View>
  );
};

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
});

export default AppButton;
