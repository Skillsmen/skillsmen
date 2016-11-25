import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constants/Colors';
import BackButton from '../../reusableComponents/BackButton';

const AddJobWhatWhereWhen = ({ styles, methods }) => {
  const userInput = (type, placeHolder) => {
    return (
      <View style={styles.inputBox}>
        <TextInput
          id={type}
          style={styles.input}
          autoFocus
          placeholder={placeHolder}
          onChangeText={text => methods.addJobDetail(type, text)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container} >
      <BackButton navigator={methods.navigator} />
      {userInput('title', 'What is the Project?')}
      {userInput('location', 'Where?')}
      <View>
        <TouchableOpacity style={styles.bttn} onPress={() => methods.nextScene('addTimeFrame', { styles, methods, time: 'from' })}>
          <Text style={{ color: colors.primary }}> NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;
