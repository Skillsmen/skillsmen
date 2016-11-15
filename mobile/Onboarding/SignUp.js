import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Picker,
} from 'react-native';

import colors from '../constants/Colors';
import questionSet from './Questions';
import professionSet from './Professions';


const blueBg = require('../assets/bluePatternBackground.png');
const whiteBg = require('../assets/white textured background.png');

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bttn: {
    width: width * 0.33,
    height: 30,
    margin: width * 0.015,
    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 0.5,
    borderColor: colors.primary,
    borderRadius: width * 0.33 * 0.02,
  },

  inputBox: {
    borderBottomWidth: 1,
    marginBottom: width * 0.01,
    marginTop: height * 0.01,
    borderColor: colors.secondary,
  },

  input: {
    textAlign: 'center',
    height: 30,
    width: width * 0.7,
  },
});

const occupationSet = set =>
  set.map((occupation, index) => (
    <Picker.Item key={index}label={occupation} value={occupation} />
  ));


class SignUp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: props.which === 'profession' ? 'PROFESSION' : '',
    };

    this.nextScene = this.nextScene.bind(this);
    this.userInput = this.userInput.bind(this);
  }

  userInput() {
    const which = this.props.which;
    if (which === 'profession') {
      return (
        <Picker
          style={{ width }}
          selectedValue={this.state.input}
          onValueChange={item => this.setState({ input: item })}
        >
          {occupationSet(professionSet)}
        </Picker>
      );
    }

    return (
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          autoFocus
          placeholder={questionSet[which]}
          onChangeText={text => this.setState({ input: text })}
        />
      </View>
    );
  }

  nextScene() {
    const which = this.props.which;
    if (which === 'nameText') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'profession',
          nameText: this.state.input,
        },
      });
    }
    if (which === 'profession') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'years',
          nameText: this.props.nameText,
          profession: this.state.input,
        },
      });
    }
    if (which === 'years') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'location',
          nameText: this.props.nameText,
          profession: this.props.profession,
          years: this.state.input,
        },
      });
    }
    if (which === 'location') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'contact',
          nameText: this.props.nameText,
          profession: this.props.profession,
          years: this.props.years,
          location: this.state.input,
        },
      });
    }
    if (which === 'contact') {
      this.props.navigator.push({
        name: 'SignUp',
        passProps: {
          username: this.props.username,
          password: this.props.password,
          which: 'experienceText',
          nameText: this.props.nameText,
          profession: this.props.profession,
          years: this.props.years,
          location: this.props.location,
          contact: this.state.input,
        },
      });
    }
    if (which === 'experienceText') {
      const userId = 'Sometihng we get from the database';
      const profile = {
        username: this.props.username,
        password: this.props.password,
        nameText: this.props.nameText,
        profession: this.props.profession,
        years: this.props.years,
        location: this.props.location,
        contact: this.props.contact,
        experienceText: this.state.input,
      };
      this.props.grantAccess(userId, 'blah', profile);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.userInput(this.props.which)}
        <View>
          <TouchableOpacity style={styles.bttn} onPress={this.nextScene}>
            <Text style={{ color: colors.primary }}> NEXT </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SignUp.propTypes = {
  grantAccess: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
  username: React.PropTypes.string.isRequired,
  password: React.PropTypes.string.isRequired,
  which: React.PropTypes.string.isRequired,
  nameText: React.PropTypes.string,
  profession: React.PropTypes.string,
  years: React.PropTypes.string,
  location: React.PropTypes.string,
  contact: React.PropTypes.string,
  // Don't have to pass around experienceText because it's the last one
};

export default SignUp;
