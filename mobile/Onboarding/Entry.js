import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  StyleSheet,
} from 'react-native';


class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
    };
    this.signin = this.signin.bind(this);
    this.signup = this.signup.bind(this);
    const { height, width } = Dimensions.get('window');

    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
      },

      boot: {

      },

      input: {
        borderWidth: 1,
        marginBottom: width * 0.01,
        marginTop: height * 0.01,
        borderColor: 'gray',
        height: 30,
        width: width * 0.7,
      },
    });
  }

  signin() {
    const username = this.state.user;
    if (username !== '') {
      this.props.grantAccess(username, 'blah');
    }
  }

  signup() {
    console.log('Signing up');
  }

  render() {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.boot}> Image goes here! </Text>
        <View >
          <TextInput
            style={this.styles.input}
            maxLength={16}
            placeholder="Enter your username here"
            onChangeText={text => this.setState({ user: text })}
          />
          <TextInput
            style={this.styles.input}
            placeholder="Enter your password here"
            onChangeText={text => this.setState({ pass: text })}
          />
        </View>
        <TouchableOpacity onPress={this.signin}>
          <Text> Signin </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signup}>
          <Text> Signup </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Entry.propTypes = {
  grantAccess: React.PropTypes.func.isRequired,
};

export default Entry;
