import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import moment from 'moment';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    width: width * 0.85,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  date: {
    color: '#2A2A2A',
    fontSize: 12,
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

export default ({ comment, rating, ReviewFor, ReviewFrom, createdAt, key, reviewerName, reviewerImage }) => {
  reviewerImage = reviewerImage || 'some/fake/uri'; // quick fix to the NSNULL error
  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Image style={styles.profPic} source={{ uri: reviewerImage }} />
      </View>
      <View style={styles.cardRight}>
        <View>
          <View style={styles.topRow}>
            <Text style={styles.name}>
              { reviewerName}
            </Text>
            <Text style={styles.date}>
              {moment(createdAt).format('MMM Do YYYY')}
            </Text>
          </View>
          <Text style={styles.recText}>
            { comment }
          </Text>
        </View>
      </View>
    </View>
  );
};
