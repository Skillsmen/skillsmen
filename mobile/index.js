/* eslint react/jsx-filename-extension: 0 */

import Exponent from 'exponent';
import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import NavigationBar from './NavigationBar';
import Router from './Router';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    fetch('http://127.0.0.1:3000/users')
    .then((res) => {
      console.log('Got it!');
      return res.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log('Nope', err);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute="profile" />
          <NavigationBar />
        </NavigationProvider>
      </View>
    );
  }
}

Exponent.registerRootComponent(App);

