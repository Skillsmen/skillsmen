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
import { withNavigation } from '@exponent/ex-navigation';
import Router from '../../../Router.js';

const renderIcon = (name, size = 15, isSelected) =>
  (
    <FontAwesome
      name={name}
      size={size}
      color={isSelected ? '#395b91' : '#434343'}
    />
  );


const TradieRow = ({ navigator, name, expertise, location, reviews }) => {
  const pressUser = (props) => {
    navigator.push(Router.getRoute('profile', { props: 'propsplaceholder' }));
  };
  return (
    <TouchableOpacity onPress={pressUser}>
      <View className="tradieRow" style={styles.row}>

      <View style={styles.rightRow}>
        <View style={styles.rowUserPic}>
          {renderIcon('user-circle', 45)}
        </View>
        <TradieBanner 
          expertise={expertise}
          location={location}
          reviews={reviews}
          styles={styles}
          Icon={renderIcon}
          name={name}
        />
      </View>
      </View>
    </TouchableOpacity>
  );
};

export default TradieRow;
