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
          onChangeText={text => methods.addJobDetail(type, text)}
        />
      </View>
    );
  return (
    <View style={styles.container}>
    <BackButton navigator={methods.navigator} />
      {userInput('profession', 'What skills are needed?')}
      {userInput('hires', 'How many people?')}
      {userInput('pay', 'Whats the pay?')}
      {userInput('description', 'Describe the job.', true, styles.tallInput)}

      <View>
        <TouchableOpacity style={styles.bttn} onPress={() => {
          methods.dispatchJobDetails();
          methods.nextScene('workerList', { styles, methods });
        }}>
          <Text style={{ color: colors.primary }}> Submit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;