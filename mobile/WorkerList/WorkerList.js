import React from 'react';

import {
  View,
  Text,
} from 'react-native';
import RowList from './components/tradieList/TradieList';
import styles from './workerListStyles';
import SearchBar from 'react-native-search-bar';

const rowList = [
  { name: 'Kanye West', location: 'San Bernardino', expertise: 'Plumba', reviews: '9' },
  { name: 'Kanye West', location: 'San Bernardino', expertise: 'Plumba', reviews: '9' }
];


const WorkerList = () => (
  <View>
    <Text style={styles.title}> WorkerList </Text>
    <SearchBar    />
    <RowList
      setOfTradies={rowList}
    />
  </View>
);

export default WorkerList;
