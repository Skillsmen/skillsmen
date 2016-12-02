import React from 'react';
import {
  Alert,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Facebook } from 'exponent';
import settings from '../settings';
import axios from 'axios'
import Router from '../navigation/Router';
import Actions from '../actions/index';

export default class FBAuth extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._signInWithFacebook}>
          <View style={styles.facebookButton}>
            <Text style={styles.facebookButtonText}>
              Sign in with Facebook
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  signup = () => {
    const { dispatch } = this.props
    if (!!this.state.facebookId) {
      const {username, password, facebookId, profilePicUrl } = this.state;
      dispatch(Actions.updateProfile({ name: username, password, facebookId, profilePicUrl }))
      this.props.navigator.push(Router.getRoute('signup', {
        questionIndex: 1,
        username,
        password,
        facebookId,
      }));
    }
  }
  signin = (token) => {
    const { username, password } = this.state
    if (username !== '' && password !== '') {
      axios.post(`${settings.SERVER}/signin/`, {
        username,
        password,
      })
      .then((response) => {
        const { dispatch } = this.props;
        dispatch(Actions.updateProfile(response.data));
        dispatch(Actions.grantAccess(`${token}`));
      })
      .catch((error) => {
        console.log('[ERROR] SignIn failed:', error.message);
        this.setState({ badSignIn: true, badSignUp: false });
      });
    }
  };
  _signInWithFacebook = async () => {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync('379076469096479', {
      permissions: ['public_profile', 'email'],
      behavior: Platform.OS === 'ios' ? 'web' : 'system',
    });
    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const info = await response.json();
      const pic = await fetch(`http://graph.facebook.com/${info.id}/picture/?width=320&height=320`);
      const profilePicUrl = await pic.url;
      this.setState({
        facebookId: info.id,
        username: info.name,
        password: info.id,
        profilePicUrl,
      })
      const userExist  = await axios(`${settings.SERVER}/facebookExists/${info.id}`);
        if(userExist.data) {
          console.log('USER EXISTS')
          // grant token access
          // route to homepage
          this.signin();
        } else {
          console.log('USER EXISTS NOT')
          this.signup();
          // grant access token
          // redirect to signup scenes
        }
    } else {
      Alert.alert('Facebook credentials could not be verified');
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderRadius: 5,
    width: 250,
  },
  facebookButtonText: {
    fontSize: 15,
    color: '#fff',
  },
});
