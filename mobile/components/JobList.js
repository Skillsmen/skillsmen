import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SearchBar from './searchBar';
import JobTypeFilter from './JobTypeFilter';
import MapListToggle from './mapListToggle';
import JobTile from './JobTile';
import AddJobButton from '../components/AddJob/AddJobButton';

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
      counter: 0,
    };
  }

  componentDidMount() {
    // Had to comment this out because update jobs only needs
    // to be called once (when the app starts). Consecutive calls
    // will create duplicates. Would be ideal to have a function
    // that refreshes the joblist though. (negligable for now).

    // console.log('JobList mounted!');
    // const { updateJobs } = this.props;
    // updateJobs();
  }

  AddButton() {
    return (<AddJobButton navigator={this.props.navigator} />);
  }

  render() {
    const { jobs, goToJob } = this.props;
    const loading = !jobs;
    return (
      <View>
        <View>
          <SearchBar rightButton={this.AddButton()} />
        </View>
        <JobTypeFilter />
        <MapListToggle />
        { !loading &&
          <ScrollView>
            {jobs.map((job, i) =>
              (<JobTile
                job={job}
                key={i}
                pressJob={() => { goToJob(job); }}
              />))}
          </ScrollView>
        }
        { loading &&
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.centering, { height: 80 }]}
            size="large"
            color="black"
          />
        }
      </View>
    );
  }
}

JobList.propTypes = {
  updateJobs: React.PropTypes.func.isRequired,
  jobs: React.PropTypes.array.isRequired,
  goToJob: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
};

export default JobList;
