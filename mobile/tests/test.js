/* eslint-env node, mocha */

import React from 'react';
import proxyquire from 'proxyquire';
import { shallow } from 'enzyme';
import { expect, assert} from 'chai';
import chai from 'chai';
import mockery from 'mockery';
import configureStore from 'redux-mock-store';
import spies from 'chai-spies';
import Promise from 'bluebird';

chai.use(spies);
spy = chai.spy();
mockery.enable({
  warnOnReplace: false,
  warnOnUnregistered: false,
});

mockery.registerMock('../assets/theBoot.png', 0);
mockery.registerMock('../assets/bluePatternBackground.png', 0);
mockery.registerMock('../assets/whiteTexturedBackground.png', 0);
mockery.registerMock('../assets/whiteTexturedBackground.png', 0);
const mockStore = configureStore();

const ExNavigationProvider = {
  key: null,
};

const proxyquireStrict = proxyquire.noCallThru();
const Entry = proxyquireStrict('../containers/Entry.js', {
  '../navigation/Router': ExNavigationProvider,
}).Entry;

const credentials = {
  user: 'john',
  pass: 'oliver',
};
const dispatch = chai.spy();
const signin = chai.spy();

const clickOnLoginBtn = (creds) => new Promise(
  (resolve) => {
    const wrapper = shallow(<Entry dispatch={dispatch} signin={signin} />);
    wrapper.setState(creds);
    const touchables = wrapper.find('#signin');
    touchables.prop('onPress')(); 
  }
);

describe('<Entry/>', () => {
  it('should call signin method when signin button is pressed', () => {
     // Click sign in button. Simulate the user having entered username: 'john', password: 'oliver'
    clickOnLoginBtn(credentials).then(() => {
      expect(dispatch).to.have.been.called.twice;
    });
  });

  it('should be a spy, \'signin\'', () => {
    expect(signin).to.be.spy;
  });
});
