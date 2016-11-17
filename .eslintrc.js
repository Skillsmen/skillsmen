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
  "rules": {
      "react/jsx-filename-extension": "off",
      "react/forbid-prop-types": "off"
  },
  "plugins": [
      "react",
      "react-native"
  ],
  "rules": {
    "arrow-body-style": "off"
  }
};