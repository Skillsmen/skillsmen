/* eslint react/jsx-filename-extension: 0 */
/* eslint-env browser*/

import Exponent from 'exponent';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

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
import NavigationBar from './NavigationBar';
import Entry from './Onboarding/Entry';
import SignUp from './Onboarding/SignUp';
import Router from './Router';

const mainStore = createStore(reducer);

class AppContainer extends React.Component {
  render() {
    return (
      <Provider store={mainStore}>
        <App />
      </Provider>
    );
  }
}


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

// expects an array of objects and produces a listview of of rows using
// the information on each tradie in the objects i.e. name, expertise, location
// [Wallace: What's this? ^]

class App extends React.Component {
  constructor(props, somethingelse) {
    super(props);
    // this.state = {
    //   token: null,
    //   username: null,
    //   profile: null,
    // };

    console.log('Other', somethingelse);
    console.log('Props', props);
    console.log('Context', this.context);
    // this.grantAccess = this.grantAccess.bind(this);
    this.renderScene = this.renderScene.bind(this);
  }

  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      // console.log('Rerendering entire app');
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  componentWillMount() {
    // fetch('http://127.0.0.1:3000/users')
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error(err));

    // Persistant login via device id?
    // console.log(Exponent.Constants.deviceId);

    // Persistant login via tokens?
    // AsyncStorage.multiGet(['token', 'username'])
    // .then((data) => {
    //   if (data[0][1] !== null && data[1][1] !== null) {
    //     this.setState({
    //       token: data[0][1],
    //       username: data[1][1],
    //     });
    //   }
    // });

    // Persistant login via express sessions? (yet to be investigated)
  }

  // grantAccess(username, token, profile) {
  //   AsyncStorage.multiSet([
  //     ['token', token],
  //     ['username', username],
  //   ]);

  //   this.setState({
  //     token,
  //     username,
  //     profile,
  //   });
  // }

  // Scene routing specifically for Onboarding only
  renderScene(route, navigator) {
     // store.dispatch(grantAccess(username, token profile));
    const action = (username, token, profile) => {
      // console.log('creating action!');
      return {
        type: 'GRANT_ACCESS',
        username,
        token,
        profile,
      };
    };
    // const { store } = this.context;
    // console.log('A sentence is here');
    console.log('This', this);
    const { store } = this.context;
    if (route.name === 'Entry') {
      return (<Entry grantAccess={(username, token, profile) => store.dispatch(action(username, token, profile))} navigator={navigator} />);
    }
    if (route.name === 'SignUp') {
      return (<SignUp grantAccess={(username, token, profile) => store.dispatch(action(username, token, profile))} navigator={navigator} {...route.passProps} />);
    }
    return (<Text> BAD ROUTE </Text>);
  }

  render() {
    const { store } = this.context;
    const state = store.getState().app;
    console.log('State:', state);
    if (state.token) {
      return (
        <View style={styles.container}>
          <NavigationProvider router={Router}>
            <NavigationBar profile={state.profile} />
          </NavigationProvider>
        </View>
      );
    }
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


App.contextTypes = {
  store: React.PropTypes.object,
};

export default AppContainer;
Exponent.registerRootComponent(AppContainer);

