import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';

import colors from '../constants/Colors';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  boot: {
    width: width * 0.70 * 1.26,
    height: width * 0.70,
    resizeMode: 'stretch',
  },

  buttonBox: {
    flex: 1,
    flexDirection: 'row',
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

const boot = require('../assets/theBoot.png');

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    };
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
  }

  signin() {
    const username = this.state.user;
    if (username !== '') {
      this.props.grantAccess(username, 'blah');
    }
  }

  signup() {
    const username = this.state.user;
    const password = this.state.pass;
    if (username) {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username,
          password,
          which: 'nameText',
        },
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.boot}
          source={boot}
        />
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            maxLength={16}
            autoFocus
            placeholder="ENTER YOUR USERNAME"
            onChangeText={text => this.setState({ user: text })}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            maxLength={16}
            secureTextEntry
            placeholder="ENTER YOUR PASSWORD"
            onChangeText={text => this.setState({ pass: text })}
          />
        </View>

        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.bttn} onPress={this.signin}>
            <Text style={{ color: colors.primary }}> SIGNIN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bttn} onPress={this.signup}>
            <Text style={{ color: colors.primary }}> SIGNUP </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

Entry.propTypes = {
  grantAccess: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
};

export default Entry;
