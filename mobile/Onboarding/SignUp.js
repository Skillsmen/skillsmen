import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import colors from '../constants/Colors';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bttn: {
    width: width * 0.33,
    height: 30,
    margin: width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: width * 0.33 * 0.02,
  },

  inputBox: {
    borderBottomWidth: 1,
    marginBottom: width * 0.01,
    marginTop: height * 0.01,
    borderColor: colors.secondary,
  },

  input: {
    textAlign: 'center',
    height: 30,
    width: width * 0.7,
  },
});

class SignUp extends React.Component {
  static userInput(which) {

  }

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
      const userId = 'Sometihng we get from the database';
      const profile = {
        username: this.props.username,
        password: this.props.password,
        nameText: this.props.nameText,
        profession: this.props.profession,
        years: this.props.years,
        location: this.props.location,
        contact: this.props.contact,
        experienceText: this.state.input,
      };
      this.props.grantAccess(userId, 'blah', profile);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            autoFocus
            placeholder="some placeholder text"
            onChangeText={text => this.setState({ input: text })}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.bttn} onPress={this.nextScene}>
            <Text> NEXT </Text>
          </TouchableOpacity>
        </View>
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
