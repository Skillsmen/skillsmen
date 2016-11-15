import React from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Navigator,
} from 'react-native';

import Banner from '../reusableComponents/Banner/ModularBanner';
import ProfileCard from './components/ProfileCard';
import BackButton from '../reusableComponents/BackButton.js'

const bgImg = require('../assets/whiteTexturedBackground.png');
const profPic = require('../Profile/timallen.jpg');

const { height, width } = Dimensions.get('window');

const iconArr = ['money', 'wrench', 'location-arrow', 'clock-o', 'user'];
// temp props placeholders
const jobInfo = {
  id: 1,
  pay: 26,
  expertise: 'delivery',
  location: 'Tenderloin',
  time: 'Mar 28 - Oct 05',
  hires: 10,
  title: 'The Big Drop',
  description: 'This is the largest shipment of blackened shrimp we have had all year! The client is a returning customer. All hands on deck and dont let me down!',
  ownerName: 'Bill',
  mobile: '(555) 555-5555',
  ownerImage: profPic,
};


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const payrate = this.props.route.params.jobInfo.pay.toString();
    const propertyArr = [
      payrate, 
      this.props.route.params.jobInfo.expertise,
      this.props.route.params.jobInfo.location,
      this.props.route.params.jobInfo.time,
      this.props.route.params.jobInfo.hires
    ];
    if (jobInfo.vacancies > 1) { iconArr[4] = 'users'; }
    return(
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage, styles.container}
          source={bgImg}
        >
          <BackButton navigator={this.props.navigator}/>
          {/* job title here */}
          <Text style={styles.topTitle}>
            {this.props.route.params.jobInfo.title}
          </Text>

          {/* banner : job type pay rate location time range vacancies */}
          <Banner
            iconArr={iconArr}
            propertyArr={propertyArr}
            iconSize={25}
            styles={styles.banner}
            iconStyles={{ flex: 1 }}
          />
          {/* job description here */}
          <View style={styles.description}>
            <Text style={styles.title}>
              {'The Job'}
            </Text>
            <Text>
              {this.props.route.params.jobInfo.description}
            </Text>
          </View>
          {/* owner profile card here */}
          <ProfileCard jobOwner={this.props.route.params.jobInfo} picStyles={styles.contactPic} />
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    height,
    width,
    paddingBottom: Navigator.NavigationBar.Styles.General.NavBarHeight,
  },
  backgroundImage: {
    resizeMode: 'cover',
    alignItems: 'center',
    width,
  },
  contactPic: {
    borderRadius: width * 0.1 * 0.12,
    width: width * 0.1,
    height: width * 0.1,
    margin: 0.05 * height,
  },
  contact: {
    color: '#006600',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 10,
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
    marginTop: 25,
    backgroundColor: 'transparent',
  },
  banner: {
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 15,
  },
  description: {
    flex: 2,
    justifyContent: 'flex-start',
    margin: 15,
    backgroundColor: 'transparent',
  },
});

export default Profile;
