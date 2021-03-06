import React from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import BackButton from '../reusableComponents/BackButton.js'
import Router from '../navigation/Router.js'
import settings from '../settings';


const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
  background: {
    width: 100 * vw,
    height: 100 * vh,
    backgroundColor: 'transparent',
  },
  headerRow: {
    width: 100 * vw,
    height: 14 * vh,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  }, 
  headerText: {
    width: 70 * vw,
    height: 10 * vh,
  }, 
  imageIconContainter: {
    width: 30 * vw,
    height: 10 * vh,
  },
  formBox: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderColor: '#155FAB',
    borderWidth: 1,
    borderRadius: 5,
    height: 50 * vh,
    marginTop: 2 * vh,
    fontSize: 16,
    color: 'black',
    paddingLeft: 3 * vw,
    paddingRight: 3 * vw,
    paddingTop: 1 * vh,
    lineHeight: 100,
  },
  submitButtonTransparent: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderColor: '#155FAB',
    borderWidth: 1,
    borderRadius: 5,
    height: 7 * vh,
    marginTop: 2 * vh,
  },
  submitButtonBlue: {
    width: 86 * vw,
    marginLeft: 7 * vw,
    marginRight: 7 * vw,
    borderWidth: 1,
    borderRadius: 5,
    height: 7 * vh,
    marginTop: 2 * vh,
    backgroundColor: '#155FAB',
  },
  imageIcon: {
    height: 4 * vw,
    width: 4 * vw,
    borderRadius: 4 * vh,
    borderColor: 'white',
  },
  chevronLeft: {
    paddingRight: 1 * vw,
  },
  posterImageIcon: {
    width: 11 * vh,
    height: 11 * vh,
    marginLeft: 8 * vw,
    marginRight: 2 * vw,
    marginTop: 2 * vh,
    borderRadius: 5.5 * vh,
    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  recomendationHead: {
    fontSize: 20,
    fontWeight: '300',
    color: '#616060',
    marginTop: 5 * vh,
    marginLeft: 3 * vw,
  },
  submitTextBlue: {
    fontSize: 19,
    fontWeight: '200',
    color: '#155FAB',
    textAlign: 'center',
    marginTop: 1.5 * vh,
  },
  submitTextWhite: {
    fontSize: 19,
    fontWeight: '300',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 1.5 * vh,
  },
  back: {
    color: '#155FAB',
    width: 96 * vw,
    marginTop: 5 * vh,
    paddingLeft: 4 * vw,
  }
});

const whiteImg = require('../assets/whiteTexturedBackground.png');

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.goBack = () => {
      if (this.props.navigator.getCurrentIndex() > 0) {
        this.props.navigator.pop();
      } else {
        this.props.navigator.push(Router.getRoute('profile'));
      }
    };
    this.state = {
      text: '',
    };
  }

  submitButtonFormatHandler() {
    if (this.state.text.length) {
      return styles.submitButtonBlue;
    }
    return styles.submitButtonTransparent;
  }

  submitButtonFontHandler() {
    if (this.state.text.length) {
      return styles.submitTextWhite;
    }
    return styles.submitTextBlue;
  }

  handleSubmit(text, navigator, userInfo, currentLoggedInUser) {
    if (text) {
      const newId = userInfo.Reviews.length > 0 ? userInfo.Reviews[userInfo.Reviews.length - 1].id + 1 : 1;
      const reviewerName = currentLoggedInUser.name;
      const reviewerImage = currentLoggedInUser.profilePicUrl;
      const newReview = {
        rating: 4,
        ReviewFrom: 1,
        reviewerName,
        ReviewFor: userInfo.id,
        comment: text,
        reviewerImage,
      };

      userInfo.Reviews.push(newReview);

      axios.post(`${settings.SERVER}/review`, newReview)
      .catch(error => console.log(error));

      navigator.push(Router.getRoute('profile', { peerProfile: true, user: userInfo }));
    }
  }

  updateTextState(text) {
    const context = this;
    this.setState({ text });
  }

  render() {
    const text = this.state.text;
    const context = this;
    const navigator = this.props.navigator;
    const userInfo = this.props.userInfo;
    const name = this.props.name;
    const profilePicUrl = this.props.userInfo.profilePicUrl;
    const currentLoggedInUser = this.props.currentLoggedInUser;
    return (
      <Image
        style={ styles.background }
        source={ whiteImg }
      >
        <Text onPress={this.goBack} style={styles.back}>
          <FontAwesome name={'chevron-left'} left={20} color={'#3E8CF1'} size={16} style={styles.chevronLeft}></FontAwesome>
           Back to {this.props.userInfo.name}
        </Text>
        <View style={styles.headerRow}>
          <View style={styles.imageIconContainter}>
            <Image
              style={ styles.posterImageIcon }
              source={{ uri: profilePicUrl }}
            />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.recomendationHead}>Write a recommendation</Text>
          </View>
        </View>

        <TextInput 
          style={styles.formBox}
          onChangeText={text => this.updateTextState(text)}
          value={this.state.text}
          multiline={true}
          placeholder={'Recommend ' + this.props.name + '... '}
        />
        <TouchableHighlight style={this.submitButtonFormatHandler()} onPress={function() {context.handleSubmit(text, navigator, userInfo, currentLoggedInUser) }}>
          <Text style={this.submitButtonFontHandler()}> SUBMIT </Text>
        </TouchableHighlight>

      </Image>
    );
  }
}

export default AddReview;

