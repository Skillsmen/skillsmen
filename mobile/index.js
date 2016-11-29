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

// console.log('Running vanilla');
// ==================================================

// ==============================
// COMMENT OUT WHEN USING VANILLA
// ==============================
import router from './navigation/Router';
import App from './containers/App';

// console.log('Running redux version');
// ==============================


console.disableYellowBox = true;


// PLEASE STOP BREAKING MY LOGGER JUST GO COMMENT IT OUT
// I NEED THIS FOR DEBUGGING - IT'S NOT TO FLOOD THE SCREEN
const logger = store => next => action => {
  // console.log('[ ACTION ]:', action.type);
  const result = next(action);
  // console.log('[ NEXT STATE ]:', store.getState());
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

