/* eslint-env node, mocha */

import React from 'react';
import proxyquire from 'proxyquire';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import { stub } from 'sinon';
import mockery from 'mockery';

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
});
mockery.registerMock('../assets/theBoot.png', 0);
const proxyquireStrict = proxyquire.noCallThru();

// const Actions = {
//   grantAccess: null,
// };
const credentials = {
  user: 'testuser@email.com',
  pass: 'testpassword',
};

const Entry = proxyquireStrict('../Onboarding/Entry.js', {}).default;


const clickOnLoginBtn = (creds) => {
  const wrapper = shallow(<Entry/>);
  // Set the state
  wrapper.setState(creds);
  // Force the call for onPress prop so we can detect
  // if there was a call to Meteor.loginWithPassword.
  const touchables = wrapper.find('TouchableOpacity');
  const signInButton = touchables.nodes[0];
  signInButton.props('onPress')();
};

describe('<Entry/>', () => {
  it('should call signin method when signin button is pressed', () => {
    // Actions.grantAccess = stub();
    clickOnLoginBtn(credentials);
  });
});
