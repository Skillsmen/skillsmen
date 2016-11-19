import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import RowEntry from './RowEntry';
import styles from '../../workerListStyles';

const RowList = ({ setOfTradies, navigator, userData }) => {
  const listGen = () =>
    // console.log('userData1', userData);
    // console.log('setOfTradies1', setOfTradies[0]);
    setOfTradies.map((user, i) =>
      (
        <RowEntry
          key={i}
          userInfo={user}
          navigator={navigator}
        />
      ),
    );
  return (
    <View >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical
      >
        {listGen()}
      </ScrollView>
    </View>
  );
};

export default RowList;

