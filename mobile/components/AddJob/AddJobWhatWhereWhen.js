import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import colors from '../../constants/Colors';
import BackButton from '../../reusableComponents/BackButton';
import AutoCompleteLocation from './AutoCompleteLocation';

const { width, height } = Dimensions.get('window');

const AddJobWhatWhereWhen = ({ styles, methods }) => {
  const userInput = (jobType, placeHolder) => {
    return (
      <View style={styles.inputBox}>
        <TextInput
          id={jobType}
          style={styles.input}
          autoFocus
          placeholder={placeHolder}
          onChangeText={text => methods.addJobDetail(jobType, text)}
        />
      </View>
    );
  };

  return (
    <View style={[styles.container, {marginTop: height * 0.3}]} >
      {userInput('title', 'What is the Project?')}
      <AutoCompleteLocation methods={methods} />
      <View>
        <TouchableOpacity style={styles.bttn} onPress={() => methods.nextScene('addTimeFrame', { styles, methods, time: 'from' })}>
          <Text style={{ color: colors.primary }}> NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;
