import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Router from '../Router';

const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;
const whiteImg = require('../assets/whiteTexturedBackground.png');

const whiteTile = StyleSheet.create({
  bluePanel: {
    height: 30 * vh,
    width: 100 * vw,
  },
  bluePanelHeading: {
    marginTop: 5 * vh,
    color: 'black',
    fontWeight: '200',
    textAlign: 'center',
    fontSize: 19,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  leftIcon: {
    marginLeft: 15 * vw,
    width: 20 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  middleIcon: {
    width: 30 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: 2 * vw,
  },
  rightIcon: {
    width: 25 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  iconSection: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 3 * vh,
    width: 100 * vw,
  },
  iconText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
  posterImageIcon: {
    width: 8 * vh,
    height: 8 * vh,
    marginLeft: 27 * vw,
    marginRight: 2 * vw,
    borderRadius: 4 * vh,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  posterNameText: {
    color: 'black',
    fontWeight: '200',
    marginTop: 2.5 * vh,
  },
  jobPoster: {
    backgroundColor: 'rgba(0,0,0,0)',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: 100 * vh,
    marginTop: 4 * vh,
  },
  middleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
  },
});

class WhiteJobTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.pressJob = this.pressJob.bind(this);
  }

  pressJob() {
    this.props.navigator.push(Router.getRoute('jobProfile', { jobInfo: this.props.job }));
  }

  render() {
    return (
      <TouchableOpacity onPress={this.pressJob}>
        <Image
          style={whiteTile.bluePanel}
          source={whiteImg}
        >
          <Text style={whiteTile.bluePanelHeading}>
            {this.props.job.title}
          </Text>

          <View style={whiteTile.iconSection}>
            <View style={whiteTile.leftIcon}>
              <FontAwesome name={'users'} size={15} style={whiteTile.iconFormat} color={'gray'}>
                <Text style={whiteTile.iconText}> {this.props.job.hires} hires </Text>
              </FontAwesome>
            </View>
            <View style={whiteTile.middleIcon}>
              <FontAwesome name={'map-marker'} size={15} style={whiteTile.iconFormat} color={'gray'}>
                <Text style={whiteTile.middleText}> {this.props.job.location}</Text>
              </FontAwesome>
            </View>
            <View style={whiteTile.rightIcon}>
              <FontAwesome name={'money'} size={15} style={whiteTile.iconFormat} color={'gray'}>
                <Text style={whiteTile.iconText}> {this.props.job.pay} </Text>
              </FontAwesome>
            </View>
          </View>

          <View style={whiteTile.jobPoster}>
            <Image
              style={whiteTile.posterImageIcon}
              source={{ uri: this.props.job.ownerImage }}
            />
            <Text style={whiteTile.posterNameText}> {this.props.job.ownerName} </Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  }
}

WhiteJobTile.propTypes = {
  job: React.PropTypes.object,
  navigator: React.PropTypes.object,
};

export default WhiteJobTile;
