import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import TradiesExpertiseBanner from './bannerIcons/TradiesExpertiseBanner';
import TradiesLocationBanner from './bannerIcons/TradiesLocationBanner';
import TradiesReviewsBanner from './bannerIcons/TradiesReviewsBanner';
import styles from '../styles/WorkerList';

const TradieBanner = ({ expertise, location, reviews, Icon, name }) =>
  (
    <View style={styles.banner}>
      <Text style={styles.name}>{name}</Text>
      <View className="tripleBanner" style={styles.tripleBanner}>
        <TradiesExpertiseBanner
          Icon={Icon('wrench')}
          expertise={expertise}
        />
        <TradiesLocationBanner
          Icon={Icon('location-arrow')}
          location={location}
        />
        <TradiesReviewsBanner
          Icon={Icon('star-o')}
          reviews={reviews}
        />
      </View>
    </View>
  );

TradieBanner.propTypes = {
  expertise: React.PropTypes.string,
  location: React.PropTypes.string,
  reviews: React.PropTypes.array,
  Icon: React.PropTypes.func,
  name: React.PropTypes.string,
};

export default TradieBanner;
