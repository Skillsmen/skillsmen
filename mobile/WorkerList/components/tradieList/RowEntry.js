import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import styles from '../../workerListStyles';
import TradieBanner from '../tradieBanner/TradieBanner';
import Router from '../../../navigation/Router';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const renderIcon = (name, size = 15, isSelected) =>
  (
    <FontAwesome
      name={name}
      size={size}
      color={isSelected ? '#395b91' : '#434343'}
    />
  );

const rowStlyes = StyleSheet.create({
  posterImageIcon: {
    width: 11 * vh,
    height: 11 * vh,
    marginLeft: 3 * vw,
    marginRight: 2 * vw,
    marginTop: 3 * vh,
    borderRadius: 5.5 * vh,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});


const TradieRow = ({ navigator, userInfo }) => {
  const pressUser = () => {
    navigator.push(Router.getRoute('profile', { peerProfile: true, user: userInfo }));
  };
  return (
    <TouchableOpacity onPress={pressUser}>
      <View className="tradieRow" style={rowStlyes.row}>
        <Image
          style={rowStlyes.posterImageIcon}
          source={{ uri: userInfo.profilePicUrl }}
        />
        <TradieBanner
          expertise={userInfo.profession}
          location={userInfo.location}
          reviews={userInfo.Reviews.length}
          styles={styles}
          Icon={renderIcon}
          name={userInfo.name}
        />
      </View>
    </TouchableOpacity>
  );
};

TradieRow.propTypes = {
  navigator: React.PropTypes.object,
  userInfo: React.PropTypes.object,
};

export default TradieRow;
