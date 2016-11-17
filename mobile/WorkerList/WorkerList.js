import React from 'react';

import {
  View,
  Image,
  Dimensions,
} from 'react-native';
import RowList from './components/tradieList/TradieList';
import styles from './workerListStyles';
import mock from '../MOCK_USER_DATA';
import SearchBar from '../JobList/searchBar';
import JobTypeFilter from '../JobList/jobTypeFilter';

const bgImg = require('../assets/bluePatternBackground.png');

const { width } = Dimensions.get('window');

const WorkerList = ({ navigator }) =>
  (
    <View>
      <View>
        <SearchBar />
        <JobTypeFilter />
      </View>
      <RowList
        setOfTradies={mock}
        navigator={navigator}
      />
    </View>
  );

export default WorkerList;
