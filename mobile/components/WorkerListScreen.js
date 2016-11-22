import React from 'react';
import {
  View,
} from 'react-native';
import SearchBar from '../containers/WorkerSearchBar';
import JobTypeFilter from '../components/JobTypeFilter';
import WorkerList from '../containers/WorkerList';

const WorkerListScreen = ({ navigator }) => (
  <View>
    <View>
      <SearchBar />
      <JobTypeFilter />
    </View>
    <WorkerList navigator={navigator} />
  </View>
);

WorkerListScreen.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default WorkerListScreen;
