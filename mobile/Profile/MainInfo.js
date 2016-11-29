import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
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
})

const MainInfo = ({name, experience, contactInfo}) => {
    const handleClick = () => {
      Linking.canOpenURL(contactInfo).then(supported => {
        if (supported) {
          Linking.openURL(contactInfo);
        } else {
          console.log('Don\'t know how to open URI: ' + contactInfo);
        }
      });
    };
    return (
      <View>
        <Text style={styles.name}> {name}</Text>
        <Text style={styles.experience}>
          {experience}
        </Text>
        <Text style={styles.contact} onPress={handleClick}>
          <FontAwesome
            name="phone"
            size={20}
            color="#006600"
          />
          {`     ${contactInfo}`}
        </Text>
      </View>
    )
  
}

export default MainInfo;
