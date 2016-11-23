import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';


const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  cardLeft: {
    flex: 1,
  },
  profPic: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.2 * 0.5,
    borderColor: '#DCDCDC',
    borderWidth: 1,
  },
  cardRight: {
    flexDirection: 'column',
    flex: 3,
  },
  name: {
    fontSize: 16,
  },
  recText: {
    fontSize: 12,
    padding: 5,
  },
});

export default ({ comment, reating, ReviewFor, ReviewFrom, createdAt, key, reviewerName, reviewerImage }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Image style={styles.profPic} source={{ uri: reviewerImage }}/>
      </View>
      <View style={styles.cardRight}>
        <View>
          <Text style={styles.name}>
            { reviewerName }
          </Text>
          <Text style={styles.recText}>
            { comment }
          </Text>
        </View>
      </View>
    </View>
  )
};
