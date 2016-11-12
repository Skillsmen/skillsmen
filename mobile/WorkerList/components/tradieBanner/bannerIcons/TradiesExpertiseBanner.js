import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../../../workerListStyles';

const TradiesExpertiseBanner = ({ expertise, Icon }) =>
  (
    <View className="TradiesExpertiseBanner">
      <Text>
      { Icon }{' ' + expertise }
      </Text>
    </View>
  );
export default TradiesExpertiseBanner;
