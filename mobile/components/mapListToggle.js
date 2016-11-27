import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const Dimensions = React.Dimensions || require('Dimensions');

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const filterJobStyles = StyleSheet.create({
  outerBox: {
    height: 10 * vh,
    width: 100 * vw,
    backgroundColor: '#ffffff',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  mapToggle: {
    height: 10 * vh,
    width: 49.8 * vw,
    marginLeft: 0.2 * vw,
  },
  onBg: {
    height: 10 * vh,
    width: 49.6 * vw,
    marginRight: 0.2 * vw,
    backgroundColor: '#1F67A3',
    color: '#ffffff',
    marginLeft: 0.2 * vw,
  },
  offBg: {
    height: 10 * vh,
    width: 49.6 * vw,
    marginRight: 0.2 * vw,
    backgroundColor: '#ffffff',
    color:'#000000',
    borderColor: '#1F67A3',
    borderWidth: 1,
    marginLeft: 0.2 * vw,
  },
  onText: {
    textAlign: 'center',
    marginTop: 4 * vh,
    color: 'white'
  },
  offText: {
    textAlign: 'center',
    marginTop: 4 * vh,
    color: '#1F67A3',
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 4 * vh,
  },
  buttonTextWords: {
    textAlign: 'center',
    marginTop: 4 * vh,
    paddingLeft: 10 * vw,
    marginLeft: 10 * vw,
  },
});

export default class MapListToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const showMap = this.props.showMap;
    console.log('showMap:', showMap);
    return (
      <View style={filterJobStyles.outerBox}>

        <TouchableOpacity style={showMap ? filterJobStyles.offBg : filterJobStyles.onBg} onPress={() => this.props.toggleShowMap(false)}>
          <Text style={filterJobStyles.buttonText}>
            <FontAwesome name={'list'} size={15} style={filterJobStyles.buttonTextWords} color={showMap ? '#1F67A3' : 'white'} />
            <Text style={showMap ? filterJobStyles.offText : filterJobStyles.onText}>  LIST</Text>
          </Text>
        </TouchableOpacity>


        <TouchableOpacity style={showMap ? filterJobStyles.onBg : filterJobStyles.offBg} onPress={() => this.props.toggleShowMap(true)}>
          <Text style={filterJobStyles.buttonText}>
            <FontAwesome name={'map-marker'} size={15} style={filterJobStyles.buttonTextWords} color={showMap ? 'white' : '#1F67A3'} />
            <Text style={showMap ? filterJobStyles.onText : filterJobStyles.offText}> MAP</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

MapListToggle.propTypes = {
  toggleShowMap: React.PropTypes.func.isRequired,
  showMap: React.PropTypes.bool.isRequired,
};

