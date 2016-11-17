import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import BackButton from '../reusableComponents/BackButton';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flexDirection: 'row',
    resizeMode: 'cover',
    justifyContent: 'space-between',
    width,
  },
  profPic: {
    borderRadius: width * 0.4 * 0.5,
    width: width * 0.4,
    height: width * 0.4,
    marginTop: 0.05 * height,
    alignSelf: 'center',
  },
  editIcon: {
    backgroundColor: 'transparent',
    marginTop: 0.05 * height,
    marginRight: 5,
    alignSelf: 'flex-end',
  },
});


const bgImg = require('../assets/bluePatternBackground.png');
// Link from profPic will eventually need to be passed in as a prop...
const profPic = require('./timallen.jpg');

const showEdit = (navigator, peer, clickOnEdit, editMode) => {
  if (!peer) {
    return (
      <TouchableHighlight onPress={clickOnEdit}>
        <FontAwesome
          style={styles.editIcon}
          name="pencil-square-o"
          size={40}
          color={editMode ? '#7dc4ff' : '#DCDCDC'}
        />
      </TouchableHighlight>
    );
  }
};

const showBackButton = (navigator, peer) => {
  if (peer) {
    return (<BackButton navigator={navigator} />);
  }
  return null;
};

const Header = ({ navigator, userPic, peer, clickOnEdit, editMode }) => (
  <Image
    style={styles.backgroundImage}
    source={bgImg}
  >
    <View style={{ flex: 1 }} >
    {showBackButton(navigator, peer)}
    </View>
    <View style={{ flex: 1 }}>
      <Image
        style={styles.profPic}
        source={userPic || profPic}
      />
    </View>
    <View style={{ flex: 1 }}>
    { showEdit(navigator, peer, clickOnEdit, editMode) }
    </View>
  </Image>
);

Header.propTypes = {
  clickOnEdit: React.PropTypes.func,
  editMode: React.PropTypes.bool,
  peer: React.PropTypes.bool,
  userPic: React.PropTypes.string,
};

export default Header;
