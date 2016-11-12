import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../../../workerListStyles';

const TradiesLocationBanner = ({ location, Icon }) =>
  // signature: text, icon, callback
  (
    <View className="TradiesLocationBanner">      
      <Text>
              { Icon }{' ' + location }
      </Text>
    </View>
  );
export default TradiesLocationBanner
