import React from 'react';

import {
  View,
  Text,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    marginLeft: width * 0.15,
    marginBottom: width * 0.01,
    marginTop: width * 0.01,
    borderColor: 'gray',
    height: 30,
    width: width * 0.7,
  },
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> SignIn </Text>
        <TextInput
          style={styles.input}
          maxLength={16}
          placeholder="Enter your username here"
          onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password here"
          onChangeText={text => this.setState({ text })}
        />
      </View>
    );
  }
}

export default SignIn;
