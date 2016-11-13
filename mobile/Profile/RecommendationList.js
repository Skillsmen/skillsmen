import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Recommendation from './Recommendation';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  recommendations: {
    width: 0.9 * width,
    marginTop: 20,
  },
  recTitle: {
    fontSize: 20,
  },
})

// Eventually will get recommendations passed in through props and map
// over the info to create each individual recommendation
const RecommendationList = () => (
  <View style={styles.recommendations}>
    <Text style={styles.recTitle}>
      Recommendations
    </Text>
    <Recommendation />
    <Recommendation />
    <Recommendation />
    <Recommendation />
  </View>
)

export default RecommendationList;
