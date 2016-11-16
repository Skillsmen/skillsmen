import React from 'react';

import {
  View,
  Image,
  Dimensions
} from 'react-native';
import RowList from './components/tradieList/TradieList';
import styles from './workerListStyles';
import mock from '../MOCK_USER_DATA.js';

const bgImg = require('../assets/bluePatternBackground.png');
const { width } = Dimensions.get('window');

const WorkerList = ({ navigator }) => {
  return (
    <View>
      <Image
        style={[styles.backgroundImage, { width, height: 25 * 2.75 }]}
        source={bgImg}
      />
      <RowList
        setOfTradies={mock}
        navigator={navigator}
      />
    </View>
  );
}

export default WorkerList;
