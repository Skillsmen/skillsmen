import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const TradiesReviewsBanner = ({ reviews, Icon }) =>
  (
    <View style={{ flex: 1 }}>
      <Text>
        { Icon }{ (' ').concat(reviews.length).concat(' reviews') }
      </Text>
    </View>
  );

TradiesReviewsBanner.propTypes = {
  reviews: React.PropTypes.array,
  Icon: React.PropTypes.object,
};

export default TradiesReviewsBanner;
