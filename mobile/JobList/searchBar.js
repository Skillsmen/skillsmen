import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const vh = height/100;
const vw = width/100;

const searchStyles = StyleSheet.create({
  bluePattern: {
    height: 10*vh
  },
  searchBar: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    fontWeight: "100",
    height: 4*vh,
    fontSize: 15,
    marginLeft: 10*vw,
    marginTop: 4*vh,
    width: 80*vw,
    color: 'white',
    paddingLeft:3*vw
  },
  hideSearchIcon: {
    color: '#ffffff'
  }
  ,
  jobTypeBar: {
    height: 7*vh,
    backgroundColor: 'white',
    width: 100*vw
  },
  jobTypeText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  },
  searchIcon: {
    paddingTop:0.4*vh
  }
});

export default class searchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
  }

  hideSearchIcon(text) {
    var context = this;
    this.setState({searchText: text}, function() {
    });
  }
  render() {
    return(
      <Image
        style={[searchStyles.bluePattern, {flexDirection: 'row', width, height: 25 * 2.75 }]}
        source={require('../assets/bluePatternBackground.png')}
      >
        <TextInput 
          style={searchStyles.searchBar}
          placeholder='       Search projects'
          placeholderTextColor='white'
          onChangeText={(text) => this.hideSearchIcon(text)}
          value={this.state.searchText}
        >
        {this.state.searchText.length > 0 ? null : <FontAwesome name={'search'} size={18} style={searchStyles.searchIcon} color={'#ffffff'}></FontAwesome>}
        </TextInput>
        {this.props.leftButton()}
      </Image>
    )
  }
}