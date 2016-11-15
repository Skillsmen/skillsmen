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
  ]
};
