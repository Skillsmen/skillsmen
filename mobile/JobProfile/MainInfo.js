import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import moment from 'moment';
import Banner from '../reusableComponents/Banner/ModularBanner';
import ProfileCard from './components/ProfileCard/ProfileCard';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  banner: {
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  icon: {
  },
  description: {
    flex: 2,
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  topTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: 25,
    backgroundColor: 'transparent',
  },
  container: {
    alignItems: 'stretch',
    height: height - 106, // 64 is the size of the tab bar, 42 is the go back button
    width,
    marginLeft: 15,
  },
  time: {
    backgroundColor: 'transparent',
    flex: 0.5,
  },
});

const iconArr = ['money', 'wrench', 'location-arrow', 'user'];
const MainInfo = ({ propertyArr, title, description, User, start, end }) => {
  console.log(start, end);
  return (
    <View>
      <Text style={styles.topTitle}>
        {title}
      </Text>
      <View style={styles.container}>
        {/* job title here */}
        {/* banner : job type pay rate location time range vacancies */}
        <Banner
          iconArr={iconArr}
          propertyArr={propertyArr}
          iconSize={25}
          styles={styles.banner}
          iconStyles={{ flex: 1 }}
        />
        {/* time range */}
        <Text style={styles.time}>
          <FontAwesome
            name={'clock-o'}
            size={15}
            color={'green'}
          />
          {' '}
          {moment(new Date(start.toString())).format('ddd, MMM Do')}
        </Text>
        <Text style={styles.time}>
          <FontAwesome
            name={'clock-o'}
            size={15}
            color={'red'}
          />
          {' '}
          {moment(new Date(end.toString())).format('ddd, MMM Do')}
        </Text>
        {/* job description here */}
        <View style={styles.description}>
          <Text style={styles.title}>
            {'The Job'}
          </Text>
          <Text>
            {description}
          </Text>
        </View>

        {/* owner profile card here */}
        <ProfileCard jobOwner={User} picStyles={styles.contactPic} />
      </View>
    </View>
  );
};

export default MainInfo;
