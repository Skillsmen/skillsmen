/* eslint-env node, mocha */

import React from 'react';
import proxyquire from 'proxyquire';
import { shallow } from 'enzyme';
import { expect, assert } from 'chai';
import { stub, spy } from 'sinon';
import mockery from 'mockery';

mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
});

mockery.registerMock('../assets/theBoot.png', 0);
mockery.registerMock('../assets/bluePatternBackground.png', 0);
mockery.registerMock('../assets/whiteTexturedBackground.png', 0);

const ExNavigationProvider = {
  key: null,
};

const proxyquireStrict = proxyquire.noCallThru();
const Entry = proxyquireStrict('../containers/Entry.js', {
  signin: spy(),
  '../navigation/Router': ExNavigationProvider,
}).default;

const credentials = {
  user: 'john',
  pass: 'oliver',
};


const clickOnLoginBtn = (creds) => {
  const wrapper = shallow(<Entry />);
  wrapper.setState(creds);
  const touchables = wrapper.find('TouchableOpacity');
  const signInButton = touchables.nodes[0];
  // signInButton.props.onPress();
  signInButton.prop('onPress')();
};

describe('<Entry/>', () => {
  it('should call signin method when signin button is pressed', () => {
  // Click sign in button. Simulate the user having entered username: 'john', password: 'oliver'
    clickOnLoginBtn(credentials);
    expect(Entry.signin.calledOnce).to.equal(true);
  });
});
