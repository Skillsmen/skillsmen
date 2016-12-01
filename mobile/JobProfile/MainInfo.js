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
import Banner from '../reusableComponents/Banner/ModularBanner';
import ProfileCard from './components/ProfileCard/ProfileCard';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  banner: {
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 15,
  },
  icon: {
  },
  description: {
    flex: 2,
    justifyContent: 'flex-start',
    margin: 15,
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
  },
  contactPic: {
    borderRadius: width * 0.1 * 0.12,
    width: width * 0.1,
    height: width * 0.1,
    margin: 0.05 * height,
  },
});

const renderIcon = (name, size = 15, isSelected) =>
  (
    <FontAwesome
      name={name}
      size={size}
      color={isSelected ? '#395b91' : '#434343'}
    />
  );

const iconArr = ['money', 'wrench', 'location-arrow', 'user'];
const MainInfo = ({ propertyArr, title, description, User, start, end }) => {
  console.log(start, end);
  return (
    <View style={styles.container}>
      {/* job title here */}
      <Text style={styles.topTitle}>
        {title}
      </Text>
      {/* banner : job type pay rate location time range vacancies */}
      <Banner
        iconArr={iconArr}
        propertyArr={propertyArr}
        iconSize={25}
        styles={styles.banner}
        iconStyles={{ flex: 1 }}
      />
      {/* time range */}
      <Text>
        <FontAwesome
          name={'clock-o'}
          size={15}
          color={'green'}
        />
        {new Date(start).toString()}
      </Text>
      <Text>
        <FontAwesome
          name={'clock-o'}
          size={15}
          color={'red'}
        />
        {new Date(end).toString()}
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
  );
};

export default MainInfo;
