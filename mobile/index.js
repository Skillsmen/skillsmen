/* eslint react/jsx-filename-extension: 0 */
/* eslint-env browser*/

import Exponent from 'exponent';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import App from './App';

const store = createStore(reducer);

console.log('React', React);
console.log('Provider', Provider);
console.log(App);
const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
);


export default AppContainer;
Exponent.registerRootComponent(AppContainer);

