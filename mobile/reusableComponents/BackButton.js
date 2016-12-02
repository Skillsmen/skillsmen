import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Router from '../navigation/Router';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const backButton = StyleSheet.create({
  back: {
    // marginTop: 3 * vh,
    color: '#3E8CF1',
    backgroundColor: 'transparent',
    fontSize: 16,
  },

  container: {
    position: 'absolute',
    left: 5,
    top: height * 0.03,
    width: width * 0.3,
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});


class BackButton extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = () => {
      if (this.props.navigator.getCurrentIndex() > 0) {
        this.props.navigator.pop();
      } else {
        this.props.navigator.push(Router.getRoute('profile'));
      }
    };

    this.generateBackText = () => {
      if (this.props.text) {
        return this.props.text;
      }
      return '  Go back';
    };
  }


  render() {
    return (
      <View style={backButton.container}>
        <Text onPress={this.goBack} style={backButton.back}>
          <FontAwesome name={'chevron-left'} left={20} color={'#3E8CF1'} size={16}></FontAwesome>
          {this.generateBackText()}
        </Text>
        {this.props.rightComponent}
      </View>
    );
  }
}

BackButton.propTypes = {
  text: React.PropTypes.string,
  navigator: React.PropTypes.object,
};

export default BackButton;
