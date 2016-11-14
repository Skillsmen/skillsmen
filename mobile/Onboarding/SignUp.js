import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    marginBottom: width * 0.01,
    marginTop: height * 0.01,
    borderColor: 'gray',
    height: 30,
    width: width * 0.7,
  },
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.nextScene = this.nextScene.bind(this);
  }

  nextScene() {
    if (this.props.which === 'nameText') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'profession',
          nameText: this.state.input,
        },
      });
    }
    if (this.props.which === 'profession') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'years',
          nameText: this.props.nameText,
          profession: this.state.input,
        },
      });
    }
    if (this.props.which === 'years') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'location',
          nameText: this.props.nameText,
          profession: this.props.profession,
          years: this.state.input,
        },
      });
    }
    if (this.props.which === 'location') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'contact',
          nameText: this.props.nameText,
          profession: this.props.profession,
          years: this.props.years,
          location: this.state.input,
        },
      });
    }
    if (this.props.which === 'contact') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'experienceText',
          nameText: this.props.nameText,
          profession: this.props.profession,
          years: this.props.years,
          location: this.props.location,
          contact: this.state.input,
        },
      });
    }
    if (this.props.which === 'experienceText') {
      const username = this.props.username;
      const password = this.props.password;
      const nameText = this.props.nameText;
      const profession = this.props.profession;
      const years = this.props.years;
      const location = this.props.location;
      const contact = this.props.contact;
      const experienceText = this.state.input;
      console.log(username, password, nameText, profession, years, location, contact, experienceText);
      this.props.grantAccess(username, 'blah');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> {this.props.which} </Text>
        <View>
          <TextInput
            style={styles.input}
            autoFocus
            placeholder="some placeholder text"
            onChangeText={text => this.setState({ input: text })}
          />
        </View>
        <TouchableOpacity onPress={this.nextScene}>
          <Text> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SignUp.propTypes = {
  grantAccess: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  which: React.PropTypes.string.isRequired,
  nameText: React.PropTypes.string,
  profession: React.PropTypes.string,
  years: React.PropTypes.string,
  location: React.PropTypes.string,
  contact: React.PropTypes.string,
  // Don't have to pass around experienceText because it's the last one
};

export default SignUp;
