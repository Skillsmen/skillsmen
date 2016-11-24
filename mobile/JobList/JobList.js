// THIS FILE IS NOT CURRENTLY BEING USED
// THE JOB LIST IS BEING RENDERED THROUGH THE JOBLIST
// CONTAINER AND COMPONENT IN REDUXIFIED VERSIONS INSTEAD

import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import SearchBar from './searchBar';
import JobTypeFilter from './jobTypeFilter';
import MapListToggle from './mapListToggle';
import JobTile from './JobTile';
import AddJobButton from './AddJob/AddJobButton';
import settings from '../settings';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: 0.5 * width,
  },
});

class JobList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      jobData: [],
      counter: 0
    };
  }
  AddButton() {
    return (<AddJobButton navigator={this.props.navigator} />);
  }

  componentDidMount() {
    const context = this;
    axios.get(`${settings.SERVER}/job`)
    .then(function (response) {
      context.setState({loading: false, jobData: response.data});
    })
    .catch(function (error) {
      console.log('axios error! "catch" is running: ', error)
    });
  }

  render() {
    console.log('this.state.jobData: ', this.state.jobData)
    if (!this.state.loading) {
      return (
        <View>
          <View>
            <SearchBar rightButton={this.AddButton()} />
          </View>
          <JobTypeFilter />
          <MapListToggle />
          <ScrollView>
            {this.state.jobData.map((job, i) => 
              <JobTile job={job} key={i} navigator={this.props.navigator} /> 
            )}
          </ScrollView>
        </View>
      )
    } else {
      return (
        <View>
          <View>
            <SearchBar rightButton={this.AddButton()} />
          </View>
          <JobTypeFilter />
          <MapListToggle />
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, {height: 80}]}
            size="large"
            color ="black"
          />
        </View>
      )
    }
  }
}

export default JobList;
