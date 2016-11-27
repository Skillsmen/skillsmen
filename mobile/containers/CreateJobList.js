import { connect } from 'react-redux';
import Router from '../navigation/Router';
import JobList from '../components/JobList';
import Actions from '../actions/index';

const getFilteredJobs = (jobs, filter) => {
  if (!filter) {
    console.log('inside if statement!')
    return jobs;
  }
  console.log('outside if statement! filter: ', filter)
  return jobs.filter((job) => { return (job.title.indexOf(filter) >= 0); });
};

const mapStateToProps = (state) => {
  return {
    jobs: getFilteredJobs(state.jobList.jobList, state.jobList.filter),
    filter: state.jobList.filter,
    showMap: state.jobList.showMap,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToJob: (jobObj) => {
    const params = {
      job: jobObj,
    };
    ownProps.navigator.push(Router.getRoute('jobProfile', params));
  },
  updateJobs: () => {
    dispatch(Actions.updateJobList());
  },
  changeFilter: (filter) => {
    dispatch(Actions.changeJobFilter(filter));
  },
  toggleShowMap: (showMap) => {
    dispatch(Actions.toggleShowMap(showMap));
  },
});


const CreateJobList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobList);

export default CreateJobList;
