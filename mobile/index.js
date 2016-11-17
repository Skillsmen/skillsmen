/* eslint react/jsx-filename-extension: 0 */
/* eslint-env browser*/

import Exponent from 'exponent';
import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from './reducers';
import App from './App';

const mainStore = createStore(reducer);

const AppContainer = () => (
  <Provider store={mainStore}>
    <App />
  </Provider>
);


export default AppContainer;
Exponent.registerRootComponent(AppContainer);

