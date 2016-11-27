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
  listToggle: {
    height: 10 * vh,
    width: 49.8 * vw,
    marginRight: 0.2 * vw,
    backgroundColor: '#e9e9e9',
  },
  mapToggle: {
    height: 10 * vh,
    width: 49.8 * vw,
    marginLeft: 0.2 * vw,
    backgroundColor: '#e9e9e9',
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
  buttonTextWordsBold: {
    textAlign: 'center',
    marginTop: 4 * vh,
    paddingLeft: 10 * vw,
    marginLeft: 10 * vw,
    fontWeight: '600',
  },
});

export default class MapListToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={filterJobStyles.outerBox}>
        <TouchableOpacity style={filterJobStyles.listToggle} onPress={() => this.props.toggleShowMap(false)}>
          <Text style={filterJobStyles.buttonText}>
            <FontAwesome name={'list'} size={15} style={filterJobStyles.buttonTextWords} color={'black'} />
            <Text style={filterJobStyles.buttonTextWordsBold}>  LIST</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={filterJobStyles.mapToggle} onPress={() => this.props.toggleShowMap(true)}>
          <Text style={filterJobStyles.buttonText}>
            <FontAwesome name={'map-marker'} size={15} style={filterJobStyles.buttonTextWords} color={'gray'} />
            <Text style={filterJobStyles.buttonTextWords}> MAP</Text>
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

