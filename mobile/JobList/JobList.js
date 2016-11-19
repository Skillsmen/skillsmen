import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import fakeJobData from './fakeJobData';
import SearchBar from './searchBar';
import JobTypeFilter from './jobTypeFilter';
import MapListToggle from './mapListToggle';
import JobTile from './JobTile';
import AddJobButton from './AddJob/AddJobButton';

const Dimensions = React.Dimensions || require('Dimensions');

const { width } = Dimensions.get('window');

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