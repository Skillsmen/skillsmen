import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import SearchBar from './searchBar';
import JobTypeFilter from './JobTypeFilter';
import MapListToggle from './mapListToggle';
import JobTile from './JobTile';
import GoogleMap from './GoogleMap';
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
      jobData: [],
      counter: 0,
    };
    // toggleShowMap = () => {
    //   console.log('toggleShowMap running!')
    //   this.setState({
    //     showMap: !this.state.showMap,
    //   });
    // };
    // toggleShowMap.bind(this);
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
    const { jobs, goToJob, filter, changeFilter, toggleShowMap, userId } = this.props;
    const showMap = this.props.showMap;
    return (
      <View>
        <View>
          <SearchBar filter={filter} changeFilter={changeFilter} rightButton={this.AddButton()} />
        </View>
        <JobTypeFilter text={"Jobs"}/>
        <MapListToggle toggleShowMap={toggleShowMap} showMap={showMap} />
        { !showMap &&
          <ScrollView>
            {jobs.map((job, i) =>
              (<JobTile
                job={job}
                key={i}
                index={i}
                pressJob={() => { goToJob(job.id, userId === job.User.id); }}
                // pressJob={() => { goToJob(job); }}

              />))}
          </ScrollView>
        }
        { showMap &&
          <GoogleMap
            jobs={jobs}
            pressJob={() => { goToJob(); }}
          />
        }
      </View>
    );
  }
}

JobList.propTypes = {
  changeFilter: React.PropTypes.func.isRequired,
  filter: React.PropTypes.string.isRequired,
  jobs: React.PropTypes.array.isRequired,
  goToJob: React.PropTypes.func.isRequired,
  navigator: React.PropTypes.object,
  toggleShowMap: React.PropTypes.func.isRequired,
};

export default JobList;
