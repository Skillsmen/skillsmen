import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const TradiesLocationBanner = ({ location, Icon }) =>
  // signature: text, icon, callback
  (
    <View style={{ flex: 1 }}>
      <Text>
        { Icon }{ (' ').concat(location) }
      </Text>
    </View>
  );

TradiesLocationBanner.propTypes = {
  location: React.PropTypes.string,
  Icon: React.PropTypes.object,
};

export default TradiesLocationBanner;

