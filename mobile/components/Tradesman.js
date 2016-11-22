import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import styles from '../styles/WorkerList';
import TradieBanner from './TradieBanner';

const renderIcon = (name, size = 15, isSelected) =>
  (
    <FontAwesome
      name={name}
      size={size}
      color={isSelected ? '#395b91' : '#434343'}
    />
  );


const Tradesman = ({ userInfo, pressUser }) => {
  return (
    <TouchableOpacity onPress={pressUser}>
      <View className="tradieRow" style={styles.row}>
        <View style={styles.rightRow}>
          <View style={styles.rowUserPic}>
            {renderIcon('user-circle', 45)}
          </View>
          <TradieBanner
            expertise={userInfo.profession}
            location={userInfo.location}
            reviews={userInfo.Reviews}
            styles={styles}
            Icon={renderIcon}
            name={userInfo.name}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Tradesman;
