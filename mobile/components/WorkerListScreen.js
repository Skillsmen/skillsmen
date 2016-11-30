import React from 'react';
import {
  View,
  ScrollView
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
    <ScrollView>
      <WorkerList navigator={navigator} />
    </ScrollView>
  </View>
);

WorkerListScreen.propTypes = {
  navigator: React.PropTypes.object.isRequired,
};

export default WorkerListScreen;
