/* eslint react/jsx-filename-extension: 0 */
/* eslint-env browser*/

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

// expects an array of objects and produces a listview of of rows using
// the information on each tradie in the objects i.e. name, expertise, location

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    // fetch('http://127.0.0.1:3000/users')
    //   .then(res => res.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.error(err));
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

export default App;
Exponent.registerRootComponent(App);

