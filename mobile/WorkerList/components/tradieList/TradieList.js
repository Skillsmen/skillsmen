import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import RowEntry from './RowEntry';
import styles from '../../workerListStyles';

const RowList = ({ setOfTradies }) => {
  const listGen = () =>
    setOfTradies.map((tradie, i) =>
      (
        <RowEntry
          key={i}
          name={tradie.name}
          expertise={tradie.expertise}
          location={tradie.location}
          reviews={tradie.reviews}
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

