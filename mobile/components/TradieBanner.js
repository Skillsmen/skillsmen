import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import styles from '../styles/WorkerList';

const TradieBanner = ({ profession, location, rating }) =>
  (
    <View style={[styles.iconSection]}>
      <View style={[styles.leftIcon, { alignItems: 'center', flexDirection: 'row' }]}>
        <FontAwesome name={'wrench'} size={15} style={styles.iconFormat} color={'868686'} />
          <Text style={[styles.iconText, { color: '868686' }]}> {profession}</Text>
      </View>
      <View style={[styles.middleIcon, { alignItems: 'center', flexDirection: 'row' }]}>
        <FontAwesome name={'location-arrow'} size={15} style={styles.iconFormat} color={'868686'} />
          <Text style={[styles.iconText, { color: '868686' }]}> {location}</Text>
      </View>
      <View style={[styles.rightIcon, { alignItems: 'center', flexDirection: 'row' }]}>
        <FontAwesome name={'star-o'} size={15} style={styles.iconFormat} color={'868686'} />
          <Text style={[styles.iconText, { color: '868686' }]}> {rating}</Text>
      </View>
    </View>
  );

TradieBanner.propTypes = {
  profession: React.PropTypes.string,
  location: React.PropTypes.string,
  rating: React.PropTypes.number,
};

export default TradieBanner;
