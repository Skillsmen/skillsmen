import React from 'react';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const filterJobStyles = StyleSheet.create({
  jobTypeBar: {
    height: 3 * vh,
    backgroundColor: 'white',
    width: 100 * vw,
    marginTop: 1.4 * vh,
    marginBottom: 1.0 * vh,
  },
  jobTypeText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 13,
    fontWeight: '600',
  },
  chevron: {
    paddingRight: 10 * vw,
    fontSize: 14,
  },
  filterJobStylesText: {
    fontWeight: '600',
  },
});

class JobTypeFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'list',
    };
  }
  render() {
    return (
      <View style={filterJobStyles.jobTypeBar}>
        <Text style={filterJobStyles.jobTypeText}>
          <FontAwesome name={'chevron-down'} left={20} style={filterJobStyles.chevron} color={'gray'} />
          <Text style={filterJobStyles.filterJobStylesText}>
            Plumbing Jobs
          </Text>
        </Text>
      </View>
    );
  }
}

export default JobTypeFilter;
