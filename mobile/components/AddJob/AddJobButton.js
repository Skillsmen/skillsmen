import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Router from '../../navigation/Router';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
  add: {
    marginTop: 4 * vh,
    marginLeft: 4 * vw,
  },
});


const AddJobButton = ({ navigator }) => {
  const addJob = () => {
    navigator.push(Router.getRoute('addJob'));
  };
  return (
    <View style={styles.add}>
      <TouchableOpacity onPress={addJob} >
        <FontAwesome
          style={{ backgroundColor: 'transparent' }}
          name={'plus'}
          left={20}
          color={'white'}
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AddJobButton;
