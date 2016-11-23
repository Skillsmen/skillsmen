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

const { height, width } = Dimensions.get('window');

const backgroundStyle = background.makeStyle(height, width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  failedAttempt: {
    marginTop: 0.05 * height,
    marginBottom: 0.01 * height,
    width,
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
  center: {
    textAlign: 'center',
    color: 'red',
  }
});

const boot = require('../assets/theBoot.png');

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      failedAttempt: false,
    };

    this.signin = () => {
      const username = this.state.user;
      const password = this.state.pass;
      const context = this;
      if (username !== '' && password !== '') {
        axios.post('http://127.0.0.1:3000/signin/', {
          username,
          password,
        })
        .then((response) => {
          // If valid user, update the global store with profile info from the server
          if (response.status === 200) {
            const { dispatch } = context.props;
            dispatch(Actions.updateProfile(response.data));
            dispatch(Actions.grantAccess('token string generated from server'));
          } else {
            context.setState({failedAttempt: true});
          }
        })
        .catch((error) => {
          context.setState({ failedAttempt: true });
        })
      }
    };
    this.signup = this.signup.bind(this);
  }


  signup() {
    const username = this.state.user;
    const password = this.state.pass;
    // TODO: Make a request to server to see if username already exists
    if (username !== '' && password !== '') {
      this.props.navigator.push(Router.getRoute('signup', {
        questionIndex: 0,
        username,
        password,
      }));
    }
  }

  failedSignInAttempt () {
    if (this.state.failedAttempt) {
      return (
        <View style={styles.failedAttempt}>
          <Text style={styles.center}>
            Invalid username or password
          </Text>
        </View>
      );
    }
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
            {this.failedSignInAttempt()}
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
};

const EntryConnected = connect()(Entry);
export default EntryConnected;
