/* eslint react/jsx-filename-extension: 0 */

import Exponent from 'exponent';
import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

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
// ==================================================

// ==============================
// COMMENT OUT WHEN USING VANILLA
// ==============================
import router from './navigation/Router';
import App from './containers/App';
// ==============================


console.disableYellowBox = true;

const logger = store => next => action => {
  let result = next(action);
  return result;
};

const store = createStore(reducer, applyMiddleware(thunk, logger));
const AppContainer = () => (
  <Provider store={store}>
    <NavigationProvider router={router}>
      <App />
    </NavigationProvider>
  </Provider>
);


export default AppContainer;
Exponent.registerRootComponent(AppContainer);

