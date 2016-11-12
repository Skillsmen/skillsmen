import React from 'react';
import {
  View,
} from 'react-native';
import styles from '../../workerListStyles';
import TradieBanner from '../tradieBanner/TradieBanner';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const renderIcon = (name, size = 15, isSelected) =>
  (
    <FontAwesome
      name={name}
      size={size}
      color={isSelected ? '#395b91' : '#434343'}
    />
  );
  
const TradieRow = ({ name, expertise, location, reviews }) =>
  (
    <View className="tradieRow" style={styles.row}>
    <View style={styles.rightRow}>
      <View style={{margin: 15, marginRight: 3}}>
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
  );

export default TradieRow;
