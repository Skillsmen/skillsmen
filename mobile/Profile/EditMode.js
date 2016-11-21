import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';

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
});

class EditInfo extends React.Component {
  constructor(props) {
    super(props);

    // console.log('profile from edit component', this.props.profile);
    // These will reflect default text values shown in input boxes
    // Right now, changes to these aren't reflected back in profile...
    // They will eventually trigger a PUT request to the db which will then render back on profile
    this.state = {
      nameText: '',
      experienceText: '',
      contactInfo: '',
    };
  }

  render() {
    const { setUserInfoToUpdate, userInfoToUpdate } = this.props;
    return (
      <View style={{ width }}>
        <TextInput
          style={styles.editTextBox}
          onChangeText={name => setUserInfoToUpdate('name', name)}
          defaultValue={userInfoToUpdate.name}
        />
        <TextInput
          style={[styles.editTextBox, { height: 80 }]}
          onChangeText={description => setUserInfoToUpdate('description', description)}
          defaultValue={userInfoToUpdate.description}
          multiline
        />
        <TextInput
          style={styles.editTextBox}
          onChangeText={mobile => setUserInfoToUpdate('mobile', mobile)}
          defaultValue={userInfoToUpdate.mobile}
        />
      </View>
    );
  }
}

EditInfo.propTypes = {
  profile: React.PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const EditInfoConnected = connect(mapStateToProps)(EditInfo);


export default EditInfoConnected;

