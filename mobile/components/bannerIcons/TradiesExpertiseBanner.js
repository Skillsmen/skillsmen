import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const TradiesExpertiseBanner = ({ expertise, Icon }) =>
  (
    <View style={{ flex: 1 }}>
      <Text>
        { Icon }{ (' ').concat(expertise) }
      </Text>
    </View>
  );

TradiesExpertiseBanner.propTypes = {
  expertise: React.PropTypes.string,
  Icon: React.PropTypes.object,
};

export default TradiesExpertiseBanner;

TradiesExpertiseBanner.propTypes = {
  expertise: React.PropTypes.string,
  Icon: React.PropTypes.func,
};
