import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../../workerListStyles';
import TradieBanner from '../tradieBanner/TradieBanner';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Router from '../../../Router.js';

const renderIcon = (name, size = 15, isSelected) =>
  (
    <FontAwesome
      name={name}
      size={size}
      color={isSelected ? '#395b91' : '#434343'}
    />
  );


const TradieRow = ({ navigator, userInfo }) => {
  const pressUser = () => {
    navigator.push(Router.getRoute('profile', { peerProfile: true, user: userInfo }));
  };
  return (
    <TouchableOpacity onPress={pressUser}>
      <View className="tradieRow" style={styles.row}>

      <View style={styles.rightRow}>
        <View style={styles.rowUserPic}>
          {renderIcon('user-circle', 45)}
        </View>
        <TradieBanner 
          expertise={userInfo.expertise}
          location={userInfo.location}
          reviews={userInfo.reviews}
          styles={styles}
          Icon={renderIcon}
          name={userInfo.first_name.concat(' ').concat(userInfo.last_name)}
        />
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default TradieRow;
