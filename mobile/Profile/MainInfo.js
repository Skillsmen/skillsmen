import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

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

const MainInfo = ({name, experience, contactInfo}) => (
  <View>
    <Text style={styles.name}> {name} </Text>
    <Text style={styles.experience}>
      {experience}
    </Text>
    <Text style={styles.contact}>
      <FontAwesome
        name="phone"
        size={20}
        color="#006600"
      />
      {`     ${contactInfo}`}
    </Text>
  </View>
)

export default MainInfo;
