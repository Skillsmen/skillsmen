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
import { connect } from 'react-redux';
import axios from 'axios';
import colors from '../constants/Colors';
import background from '../styles/EntryBackground';
import Router from '../navigation/Router';
import Actions from '../actions/index';
import settings from '../settings';

const { height, width } = Dimensions.get('window');

const backgroundStyle = background.makeStyle(height, width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  boot: {
    width: width * 0.65 * 1.26,
    height: width * 0.65,
    resizeMode: 'stretch',
    margin: 7,
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

const displayError = (bool, errorMsg) => {
  if (bool) {
    return (
      <Text style={{ color: 'red', backgroundColor: 'rgba(0,0,0,0)' }}>
        {errorMsg}
      </Text>
    );
  }
  return null;
};

const boot = require('../assets/theBoot.png');

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      badSignIn: false,
      badSignUp: false,
    };

    this.signin = () => {
      const username = this.state.user;
      const password = this.state.pass;
      if (username !== '' && password !== '') {
        axios.post(`${settings.SERVER}/signin/`, {
          username,
          password,
        })
        .then((response) => {
          const { dispatch } = this.props;
          dispatch(Actions.updateProfile(response.data));
          dispatch(Actions.grantAccess('token string generated from server'));
        })
        .catch((error) => {
          console.log('[ERROR] SignIn failed:', error.message);
          this.setState({ badSignIn: true, badSignUp: false });
        });
      }
    };

    this.signup = () => {
      const username = this.state.user;
      const password = this.state.pass;
      console.log('Sending', username);
      if (username !== '' && password !== '') {
        axios.get(`${settings.SERVER}/exists/${username}`)
        .then((response) => {
          console.log(response.data);
          if (response.data) {
            this.setState({ badSignIn: false, badSignUp: true });
          } else {
            this.props.navigator.push(Router.getRoute('signup', {
              questionIndex: 0,
              username,
              password,
            }));
          }
        })
        .catch((error) => {
          console.log('[ERROR] SignUp failed:', error.message);
        });
      }
    };
  }

  render() {
    return (
      <View>
        <Image
          style={backgroundStyle.header}
          source={background.blueBg}
        />
        <Image
          style={backgroundStyle.body}
          source={background.whiteBg}
        >
          <View style={styles.container}>
            <Image
              style={styles.boot}
              source={boot}
            />
            {displayError(this.state.badSignIn, 'Invalid username or password')}
            {displayError(this.state.badSignUp, 'Username already in use')}
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                maxLength={16}
                autoFocus
                autoCapitalize="none"
                placeholder="ENTER YOUR USERNAME"
                onChangeText={text => this.setState({ user: text })}
              />
            </View>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                maxLength={16}
                secureTextEntry
                autoCapitalize="none"
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
        </Image>
      </View>
    );
  }
}

Entry.propTypes = {
  navigator: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
};

const EntryConnected = connect()(Entry);
export default EntryConnected;
