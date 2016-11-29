import React from 'react';
import { Components } from 'exponent';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import moment from 'moment';

const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styling = StyleSheet.create({
  bubble: {
    height: 10 * vh,
    width: 55 * vw,
    backgroundColor: '#1F67A3',
    borderRadius: 3,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  bubbleTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: 'white',
    marginTop: 1 * vh,
  },
  info: {
    fontSize: 10,
    fontWeight: '600',
    color: 'white',
    marginTop: 0.5 * vh,
    lineHeight: 16,
  },
  bubblePic: {
    width: 7 * vh,
    height: 7 * vh,
    marginTop: 1.5 * vh,
    marginLeft: 2 * vw,
    borderRadius: 3.5 * vh,
  },
  leftBox: {
    width: 19 * vw,
    height: 5 * vh,
  },
  rightBox: {
    width: 36 * vw,
    height: 5 * vh,
  },
});

export default class MapViewComponent extends React.Component {

  pressJob() {
    console.log('pressJob running!')
    this.props.pressJob();
  }

  renderCallout(job) {
    return (
      <Components.MapView.Callout tooltip>
        <View style={styling.bubble} >
          <View style={styling.leftBox}>
            <Image source={{ uri: job.User.profilePicUrl }} style={styling.bubblePic} />
          </View>
          <View style={styling.rightBox}>
            <Text style={styling.bubbleTitle}>
              {job.title}
            </Text>
            <Text style={styling.info}>
              {moment(job.from).format('MMM Do YY').slice(0, moment(job.from).format('MMM Do YY').length - 3)}, {job.hires} spots, {job.pay}
            </Text>
          </View>
        </View>
      </Components.MapView.Callout>
    );
  }

  render() {
    return (
      <View>
        <Components.MapView
          style={{ width, height }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {this.props.jobs.map(job => (
            <Components.MapView.Marker
              coordinate={{ latitude: Number(job.lat), longitude: Number(job.lng) }}
              onCalloutPress={() => console.log('onCalloutPress')}
            >
              {this.renderCallout(job)}
            </Components.MapView.Marker>
          ))}
        </Components.MapView>
      </View>
    );
  }
}
