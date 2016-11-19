import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import fakeJobData from './fakeJobData';
import SearchBar from './searchBar';
import JobTypeFilter from './jobTypeFilter';
import MapListToggle from './mapListToggle';
import JobTile from './JobTile';
import AddJobButton from './AddJob/AddJobButton';
import axios from 'axios'

const Dimensions = React.Dimensions || require('Dimensions');

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: 0.7 * width,
  }
})

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
    axios.get('http://localhost:3000/job')
    .then(function (response) {
      context.setState({loading: false, jobData: response.data});
    })
    .catch(function (error) {
      console.log('axios error! "catch" is running: ', error)
    });
  }

  render() {
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