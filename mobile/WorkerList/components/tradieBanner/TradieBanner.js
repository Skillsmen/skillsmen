import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import TradiesExpertiseBanner from './bannerIcons/TradiesExpertiseBanner';
import TradiesLocationBanner from './bannerIcons/TradiesLocationBanner';
import TradiesReviewsBanner from './bannerIcons/TradiesReviewsBanner';
import styles from '../../workerListStyles';

const TradieBanner = ({ expertise, location, reviews, Icon, name }) =>
  (
    <View className="tradieBanner" style={styles.banner}> 
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
export default TradieBanner;
