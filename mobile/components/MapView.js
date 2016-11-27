import React from 'react';
import {
  View,
  Text,
} from 'react-native';


const MapView = ({ jobs }) => {
  return (
    <View>
      <Text> This is the Map Component </Text>
    </View>
  );
};

MapView.propTypes = {
  jobs: React.PropTypes.array.isRequired,
};

export default MapView;
