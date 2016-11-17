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
  console.log('AddJobWhatWhereWhen', methods);
  const userInput = (type, placeHolder) =>
    (
      <View style={styles.inputBox}>
        <TextInput
          id={'PROJECT_TITLE'}
          style={styles.input}
          autoFocus
          placeholder={placeHolder}
          onChangeText={text => methods.dispatch(methods.addEntry(text, 'PROJECT_TITLE'))}
        />
      </View>
    );
  return (
    <View style={styles.container}>
    <BackButton navigator={methods.navigator} />
      {userInput('PROJECT_TITLE', 'What is the Project?')}
      {userInput('PROJECT_LOCATION', 'Where?')}
      {userInput('PROJECT_TIME', 'When?')}
      <View>
        <TouchableOpacity style={styles.bttn} onPress={() => methods.nextScene('addJobDetails', { styles, methods })}>
          <Text style={{ color: colors.primary }}> NEXT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddJobWhatWhereWhen;
