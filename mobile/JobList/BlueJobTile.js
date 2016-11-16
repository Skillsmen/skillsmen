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

const blueImg = require('../assets/bluePatternBackground.png');

const blueTile = StyleSheet.create({
  bluePanel: {
    height: 30 * vh,
    width: 100 * vw,
  },
  bluePanelHeading: {
    marginTop: 5 * vh,
    color: 'white',
    fontWeight: '200',
    textAlign: 'center',
    fontSize: 19,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  leftIcon: {
    marginLeft: 20 * vw,
    width: 20 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  middleIcon: {
    width: 25 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: 2 * vw,
  },
  rightIcon: {
    width: 35 * vw,
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
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  posterImageIcon: {
    width: 8 * vh,
    height: 8 * vh,
    marginLeft: 27 * vw,
    marginRight: 2 * vw,
    borderRadius: 4 * vh,
    borderColor: 'white',
    borderWidth: 1.5,
  },
  posterNameText: {
    color: 'white',
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
    color: 'white',
    fontSize: 12,
  },
});

export default class BlueJobTile extends React.Component {
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
          style={blueTile.bluePanel}
          source={blueImg}
        >
          <Text style={blueTile.bluePanelHeading}>
            {this.props.job.title}
          </Text>

          <View style={blueTile.iconSection}>
            <View style={blueTile.leftIcon}>
              <FontAwesome name={'users'} size={15} style={blueTile.iconFormat} color={'white'}>
                <Text style={blueTile.iconText}> {this.props.job.hires} hires</Text>
              </FontAwesome>
            </View>
            <View style={blueTile.middleIcon}>
              <FontAwesome name={'map-marker'} size={15} style={blueTile.iconFormat} color={'white'}>
                <Text style={blueTile.middleText}> {this.props.job.location}</Text>
              </FontAwesome>
            </View>
            <View style={blueTile.rightIcon}>
              <FontAwesome name={'money'} size={15} style={blueTile.iconFormat} color={'white'}>
                <Text style={blueTile.iconText}> {this.props.job.pay}</Text>
              </FontAwesome>
            </View>
          </View>
          <View style={blueTile.jobPoster}>
            <Image
              style={blueTile.posterImageIcon}
              source={{ uri: this.props.job.ownerImage }}
            />
            <Text style={blueTile.posterNameText}> {this.props.job.ownerName} </Text>
          </View>
        </Image>
      </TouchableOpacity>
    );
  }
}

BlueJobTile.propTypes = {
  job: React.PropTypes.object,
  navigator: React.PropTypes.object,
};