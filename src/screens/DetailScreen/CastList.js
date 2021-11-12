import React from 'react';
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import {Avatar} from 'react-native-elements';
import PropTypes from 'prop-types';
import {primaryTextColor, secondryTextColor} from '../../constants/theme';

const CastList = props => {
  const {castList} = props;
  return (
    <View style={styles.castListContainer}>
      <ScrollView horizontal={true}>
        {castList &&
          castList.map((item, key) => <CastAvatar item={item} key={key} />)}
      </ScrollView>
    </View>
  );
};

const CastAvatar = ({item}) => {
  let names = item.split(' ');
  let firstNameChar = names[0] ? names[0].charAt(0) : '';
  let secondNameChar = names[1] ? names[1].charAt(0) : '';
  return (
    <View style={styles.castItemStyle}>
      <Avatar
        size="medium"
        rounded={true}
        title={firstNameChar + secondNameChar}
        containerStyle={styles.avatarContainerStyle}
      />
      <Text style={styles.castTitle} numberOfLines={1}>
        {item}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  castListContainer: {
    flexDirection: 'row',
  },
  castItemStyle: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    marginRight: 8,
  },
  castTitle: {
    color: primaryTextColor,
    opacity: 0.7,
    paddingVertical: 8,
    fontSize: 14,
  },
  avatarContainerStyle: {
    backgroundColor: secondryTextColor,
    opacity: 0.7,
  },
});

CastList.propTypes = {
  castList: PropTypes.array.isRequired,
};

export default CastList;
