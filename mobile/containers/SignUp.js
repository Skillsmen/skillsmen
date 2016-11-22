import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Picker,
  Image,
} from 'react-native';
import { connect } from 'react-redux';

import Router from '../navigation/Router';
import colors from '../constants/Colors';
import questionSet from '../constants/Questions';
import professionSet from '../constants/Professions';
import Actions from '../actions/index';
import background from '../constants/Background';

const { height, width } = Dimensions.get('window');
const backgroundStyle = background.makeStyle(height, width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * 0.05, //This is to offset the blue banner
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


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: this.props.route.params.questionIndex === 3 ? 'PROFESSION' : '',
      username: '',
      password: '',
    };
  }

  componentWillMount() {
    console.log('inside componentWillMount')
    console.log('this.state: ', this.state)
    this.setState({
      username: this.props.route.params.username,
      password: this.props.route.params.password,
    })
  }

  populatePicker = set =>
  set.map((occupation, index) => (
      <Picker.Item key={index}label={occupation} value={occupation} />
  ));

  userInput = () => {
    const questionIndex = this.props.route.params.questionIndex;
    if (questionIndex === 3) {
      return (
        <Picker
          style={{ width }}
          selectedValue={this.state.input}
          onValueChange={item => this.setState({ input: item })}
        >
          {this.populatePicker(professionSet)}
        </Picker>
      );
    }

    return (
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          autoFocus
          placeholder={questionSet[questionIndex][1]}
          onChangeText={text => this.setState({ input: text })}
        />
      </View>
    );
  };

  nextScene = () => {
    console.log('going to next scene');
    const { dispatch } = this.props;
    const questionIndex = this.props.route.params.questionIndex;
    const key = questionSet[questionIndex][0];
    const value = this.state.input;

    const diff = {};
    diff[key] = value;
    diff['username'] = this.state.username;
    diff['password'] = this.state.password
    if (questionIndex === 5) {
      // THIS IS WHERE ONBOARDING FINISHES AND GETS PASSED TO PROFILE
      dispatch(Actions.updateProfile(diff, true));
      dispatch(Actions.grantAccess('some token from the server'));
    } else {
      dispatch(Actions.updateProfile(diff));
      this.props.navigator.push(Router.getRoute('signup', { 
        questionIndex: questionIndex + 1,
        username: this.state.username,
        password: this.state.password,
      }));
    }
  };


  render() {
    console.log('this.state: ', this.state)
    return (
      <View>
        <Image
          style={backgroundStyle.header}
          source={background.blueBg}
        />
        <Image
          style={backgroundStyle.body}
          source={background.whiteBg}
        >
          <View style={styles.container}>
            {this.userInput()}
            <View>
              <TouchableOpacity style={styles.bttn} onPress={this.nextScene}>
                <Text style={{ color: colors.primary }}> NEXT </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

SignUp.propTypes = {
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
  dispatch: React.PropTypes.func.isRequired,
};

const SignUpConnected = connect()(SignUp);
export default SignUpConnected;
