import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View>
        <Text> Sign up here </Text>
        <TextInput
          placeholder="Bob Johnson"
        />
        <TouchableOpacity onPress={this.signup}>
          <Text> Next </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

SignUp.propTypes = {
  grantAccess: React.PropTypes.func.isRequired,
  username: React.PropTypes.string,
};

export default SignUp;
