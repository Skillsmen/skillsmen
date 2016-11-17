import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import colors from '../../constants/Colors';
import BackButton from '../../reusableComponents/BackButton';

const AddJobWhatWhereWhen = ({ route }) => {
  console.log('styles,methods: ', route.params);
  const styles = route.params.styles;
  const methods = route.params.methods;
  const userInput = (type, placeHolder, multiline, style) =>
    (
      <View style={styles.inputBox}>
        <TextInput
          id={type}
          style={[styles.input, style]}
          autoFocus
          placeholder={placeHolder}
          multiline={multiline}
          numberOfLine={2}
          onChangeText={text => methods.dispatch(methods.addEntry(text, type))}
        />
      </View>
    );
  return (
    <View style={styles.container}>
    <BackButton navigator={methods.navigator} />
      {userInput('PROJECT_EXPERTISE', 'What skills are needed?')}
      {userInput('PROJECT_HIRES', 'How many people?')}
      {userInput('PROJECT_PAY', 'Whats the pay?')}
      {userInput('PROJECT_DESC', 'Describe the job.', true, styles.tallInput )}

      <View>
        <TouchableOpacity style={styles.bttn} onPress={() =>{ console.log('success') }}>
          <Text style={{ color: colors.primary }}> NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;