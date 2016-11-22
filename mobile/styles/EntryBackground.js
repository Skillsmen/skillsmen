import { StyleSheet } from 'react-native';

const blueBg = require('../assets/bluePatternBackground.png');
const whiteBg = require('../assets/whiteTexturedBackground.png');

const makeStyle = (height, width) => StyleSheet.create({
  header: {
    height: height * 0.05,
    width,
    alignItems: 'center',
  },

  body: {
    height: height * 0.95,
    width,
  },
});


module.exports = {
  blueBg,
  whiteBg,
  makeStyle,
};
