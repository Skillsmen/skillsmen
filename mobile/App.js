
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  Navigator,
  Image,
  Dimensions,
} from 'react-native';
import {
  NavigationProvider,
} from '@exponent/ex-navigation';
import { connect } from 'react-redux';

import NavigationBar from './NavigationBar';
import Entry from './Onboarding/Entry';
import SignUp from './Onboarding/SignUp';
import Router from './Router';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  header: {
    height: height * 0.05,
    width,
  },

  background: {
    height: height * 0.95,
    width,
  },
});

const blueBg = require('./assets/bluePatternBackground.png');
const whiteBg = require('./assets/whiteTexturedBackground.png');

class App extends React.Component {
  constructor(props) {
    console.log('I\'m inside App');
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  componentWillMount() {
    // fetch('http://127.0.0.1:3000/users')
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error(err));

    // Persistant login via device id?
    // console.log(Exponent.Constants.deviceId);

    // Persistant login via tokens?
    // const { store } = this.context;
    // AsyncStorage.multiGet(['token', 'username'])
    // .then((data) => {
    //   if (data[0][1] !== null && data[1][1] !== null) {
    //     store.dispatch({
    //       type: 'GRANT_ACCESS',
    //       token: data[0][1],
    //       username: data[1][1],
    //     });
    //   }
    // });

    // Persistant login via express sessions? (yet to be investigated)
  }

  // Scene routing specifically for Onboarding only
  renderScene(route, navigator) {
    const action = (username, token, profile) => {
      return {
        type: 'GRANT_ACCESS',
        username,
        token,
        profile,
      };
    };

    const { dispatch } = this.props;
    const grantAccess = (username, token, profile) => {
      AsyncStorage.multiSet([
        ['token', token],
        ['username', username],
      ]);
      dispatch(action(username, token, profile));
    };

    if (route.name === 'Entry') {
      return (<Entry grantAccess={grantAccess} navigator={navigator} />);
    }
    if (route.name === 'SignUp') {
      return (<SignUp grantAccess={grantAccess} navigator={navigator} {...route.passProps} />);
    }
    return (<Text> BAD ROUTE </Text>);
  }

  render() {
    const { token, profile, loggedIn } = this.props;
    console.log('Props', this.props);

    // Crappy render? Could remove the state by always going to
    // the entry page and rerouting from there. See growler.
    if (token) {
      // Render the main application
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <NavigationBar profile={profile} />
          </NavigationProvider>
        </View>
      );
    }

    // Render the onboarding page
    return (
      <View style={styles.container}>
        <Image
          style={styles.header}
          source={blueBg}
        />
        <Image
          style={styles.background}
          source={whiteBg}
        >
          <Navigator
            initialRoute={{ name: 'Entry' }}
            renderScene={this.renderScene}
          />
        </Image>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const obj = {
    username: state.app.username,
    token: state.app.token,
    profile: state.app.profile,
    loggedIn: state.app.loggedIn,
  };
  return obj;
};


const AppConnected = connect(
  mapStateToProps,
)(App);


export default AppConnected;
