import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import styles from '../../../workerListStyles';

const TradiesReviewsBanner = ({ reviews, Icon }) =>
  (
    <View className="TradiesReviewsBanner">
      <Text>
        {Icon}{ ' ' + reviews + ' reviews'}
      </Text>
    </View>
  );

export default TradiesReviewsBanner;
