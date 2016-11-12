import React from 'react';

import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Recommendation from './Recommendation';

const { height, width } = Dimensions.get('window');
const bgImg = require('../assets/bluePatternBackground.png');
const profPic = require('./timallen.jpg');

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  backgroundImage: {
    resizeMode: 'cover',
    alignItems: 'center',
    width,
  },
  profPic: {
    borderRadius: width * 0.4 * 0.5,
    width: width * 0.4,
    height: width * 0.4,
    marginTop: 0.05 * height,
  },
  info: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 34,
  },
  experience: {
    fontSize: 14,
    marginTop: 10,
  },
  contact: {
    color: '#006600',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  recommendations: {
    width: 0.9 * width,
    marginTop: 20,
  },
  recTitle: {
    fontSize: 20,
  },
});
// Picture
// Name
// three component thingy... (type of worker, location, experience)
// Information / Experience
// Contact Info
// Eventually can edit
// Recommendations

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fake: 'stuff',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.backgroundImage}
          source={bgImg}
        >
          <Image
            style={styles.profPic}
            source={profPic}
          />
        </Image>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          alwaysBounceVertical
        >
          <View style={styles.info}>
            <Text style={styles.name}> Tim da Toolman </Text>
            <Text style={styles.experience}>
              This is all of my experience. I have got lots of experience.
              Hire me because of me and this and that and boom.
            </Text>
            <Text style={styles.contact}>
              <FontAwesome
                name="phone"
                size={20}
                color="#006600"
              />
              {'  (234)567-8910'}
            </Text>
            <View style={styles.recommendations}>
              <Text style={styles.recTitle}>
                Recommendations
              </Text>
              <Recommendation />
              <Recommendation />
              <Recommendation />
              <Recommendation />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;
