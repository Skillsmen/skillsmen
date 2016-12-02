import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  StyleSheet,
  Image,
  TextInput,
  View,
  Dimensions,
} from 'react-native';

const blueImg = require('../assets/bluePatternBackground.png');

const { width, height } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const searchStyles = StyleSheet.create({
  bluePattern: {
    height: 10 * vh,
    width,
  },
  searchBar: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    fontWeight: '100',
    height: 4 * vh,
    fontSize: 15,
    marginTop: 4 * vh,
    width: 80 * vw,
    color: 'white',
    paddingLeft: 3 * vw,
  },
  hideSearchIcon: {
    color: '#ffffff',
  },
  jobTypeBar: {
    height: 7 * vh,
    backgroundColor: 'white',
    width: 100 * vw,
  },
  jobTypeText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  searchIcon: {
    paddingTop: 0.4 * vh,
  },
});

const searchBar = ({ rightButton, changeFilter, filter, startText }) => {
  return (
    <Image
      style={searchStyles.bluePattern}
      source={blueImg}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TextInput
          style={searchStyles.searchBar}
          placeholder={startText || '     Search jobs, professions, locations'}
          placeholderTextColor="white"
          onChangeText={changeFilter}
          value={filter}
        >
          {filter ? null : <FontAwesome name={'search'} size={18} style={searchStyles.searchIcon} color={'#ffffff'} />}
        </TextInput>
        {rightButton}
      </View>
    </Image>
  );
};

searchBar.propTypes = {
  rightButton: React.PropTypes.object,
  changeFilter: React.PropTypes.func,
  filter: React.PropTypes.string,
};

export default searchBar;
