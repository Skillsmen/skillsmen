import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import phoneFormatter from 'phone-formatter';
import ModularBanner from '../reusableComponents/Banner/ModularBanner';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  editTextBox: {
    height: 40,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  banner: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    width,
  },
  icon: {
  },
});

const icons = ['wrench', 'globe', 'clock-o'];
class EditInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nameText: '',
      experienceText: '',
      contactInfo: '',
    };
  }

  render() {
    const { setUserInfoToUpdate, userInfoToUpdate } = this.props;
    const { description, name, mobile, profession, location, experience } = userInfoToUpdate;
    return (
      <View style={{ width }}>
        <ModularBanner
          iconArr={icons}
          propertyArr={[profession, location, `${experience} years`]}
          styles={styles.banner}
          iconStyles={styles.icon}
          editMode
          editModeKeys={['profession', 'location', 'experience']}
          setUserInfoToUpdate={setUserInfoToUpdate}
        />
        <TextInput
          style={styles.editTextBox}
          onChangeText={text => setUserInfoToUpdate('name', text)}
          defaultValue={name}
        />
        <TextInput
          style={[styles.editTextBox, { height: 80, borderTopWidth: 0, borderBottomWidth: 0 }]}
          onChangeText={text => setUserInfoToUpdate('description', text)}
          defaultValue={description}
          multiline
        />
        <TextInput
          style={styles.editTextBox}
          onChangeText={(text) => {
            if (text.slice().replace(/\D/g, '').length !== 10) {
              return;
            }
            const formatted = phoneFormatter.format(text, '(NNN)NNN-NNNN');
            setUserInfoToUpdate('mobile', formatted);
          }}
          defaultValue={mobile}
        />
      </View>
    );
  }
}

EditInfo.propTypes = {
  userInfoToUpdate: React.PropTypes.object,
  setUserInfoToUpdate: React.PropTypes.func,
};

export default EditInfo;

