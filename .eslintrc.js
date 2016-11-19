module.exports = {
  "env": {
      "es6": true,
      "node": true
  },
  "extends": "airbnb",
  "parserOptions": {
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  "plugins": [
      "react",
      "react-native"
  ],
  "rules": {
    "arrow-body-style": "off",
    "react/forbid-prop-types": "off"
    "react/jsx-filename-extension": "off"
  }
};