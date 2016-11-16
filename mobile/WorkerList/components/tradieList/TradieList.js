import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import RowEntry from './RowEntry';
import styles from '../../workerListStyles';

const RowList = ({ setOfTradies, navigator }) => {
  const listGen = () =>
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

