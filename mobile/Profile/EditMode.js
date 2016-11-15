import React from 'react';
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
    // These will reflect default text values shown in input boxes
    // Right now, changes to these aren't reflected back in profile...
    // They will eventually trigger a PUT request to the db which will then render back on profile
    this.state = {
      nameText: 'Tim da Toolman',
      experienceText: 'This is all of my experience. I have got lots of experience. Hire me because of me and this and that and boom.',
      contactInfo: '(234)567-8910',
    };
  }

  render() {
    return (
      <View style={{ width }}>
        <TextInput
          style={styles.editTextBox}
          onChangeText={nameText => this.setState({ nameText })}
          value={this.state.nameText}
        />
        <TextInput
          style={[styles.editTextBox, { height: 80 }]}
          onChangeText={experienceText => this.setState({ experienceText })}
          value={this.state.experienceText}
          multiline
        />
        <TextInput
          style={styles.editTextBox}
          onChangeText={contactInfo => this.setState({ contactInfo })}
          value={this.state.contactInfo}
        />
      </View>
    );
  }
}

export default EditInfo;

