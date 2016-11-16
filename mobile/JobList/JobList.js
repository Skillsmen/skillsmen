import React from 'react';
import fakeJobData from './fakeJobData';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import SearchBar from './searchBar.js';
import JobTypeFilter from './jobTypeFilter.js'
import MapListToggle from './mapListToggle.js'
import JobTile from './JobTile.js'
import AddJobButton from './AddJob/AddJobButton';


import {
  FontAwesome,
} from '@exponent/vector-icons';


// Get 'vh' for stylesheet. 1*vh represents 1% of the height of the viewport
const Dimensions = React.Dimensions || require('Dimensions');
const {width, height} = Dimensions.get('window');
const vh = height/100;
const vw = width/100;

// create stylesheet object

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  AddButton() {
    return () => (<AddJobButton navigator={this.props.navigator} />);
  }
  render() {
    return(
      <View>
        <View style={{ width, height: 25 * 2.75 }}>
          <SearchBar leftButton={this.AddButton()} />
        </View>
        <JobTypeFilter />
        <MapListToggle />
        <ScrollView>
          {fakeJobData.map((job, i) => 
            <JobTile job={job} key={i} navigator={this.props.navigator}/> 
          )}
        </ScrollView>
      </View>
    )
  }
}

export default JobList;