/* eslint react/jsx-filename-extension: 0 */

import Exponent from 'exponent';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  NavigationProvider,
} from '@exponent/ex-navigation';

import reducer from './reducers';

// ==================================================
// CURRENTLY USING NAVIGATION & APP FOR REDUX VERSION
// ==================================================
// TO SWITCH TO VANILLA UNCOMMENT BELOW:
// import router from './Router';
// import App from './App';
//
// console.log('Running vanilla');

// ==============================
// COMMENT OUT WHEN USING VANILLA
// ==============================
import router from './navigation/Router';
import App from './containers/App';

console.log('Running redux version');
// ==============================

const store = createStore(reducer);
console.disableYellowBox = true;

const AppContainer = () => (
  <Provider store={store}>
    <NavigationProvider router={router}>
      <App />
    </NavigationProvider>
  </Provider>
);


export default AppContainer;
Exponent.registerRootComponent(AppContainer);

