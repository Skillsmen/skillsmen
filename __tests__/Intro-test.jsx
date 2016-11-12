/* eslint-env jest, amd */
// __tests__/Intro-test.js
import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
// import Intro from '../testComponents/Intro.jsx';
import Index from '../mobile/index';


it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
