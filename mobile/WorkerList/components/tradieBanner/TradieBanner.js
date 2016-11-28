import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import TradiesExpertiseBanner from './bannerIcons/TradiesExpertiseBanner';
import TradiesLocationBanner from './bannerIcons/TradiesLocationBanner';
import TradiesReviewsBanner from './bannerIcons/TradiesReviewsBanner';
import styles from '../../workerListStyles';

const TradieBanner = ({ expertise, location, reviews = 0, Icon, name }) =>
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
  reviews: React.PropTypes.integer,
  expertise: React.PropTypes.string,
  location: React.PropTypes.string,
  name: React.PropTypes.string,
  Icon: React.PropTypes.func,
};
export default TradieBanner;
