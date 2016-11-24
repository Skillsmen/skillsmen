/*
  ===================================================================
  THIS IS THE NEW ROUTER FILE: HAD TO MAKE ONE FOR THE REDUX OVERHAUL
  ===================================================================
*/

import {
  createRouter,
} from '@exponent/ex-navigation';

import NavigationBar from './NavigationBar';
import Entry from '../containers/Entry';
import SignUp from '../containers/SignUp';
import WorkerList from '../components/WorkerListScreen';
import JobList from '../containers/CreateJobList';
// might want to refactor JobList a little to mirror style of WorkerListScreen et al.

import Profile from '../Profile/Profile';
// import JobList from '../JobList/JobList';
import Messages from '../Messages/Messages';
import JobProfile from '../JobProfile/Profile';
import AddJob from '../JobList/AddJob/AddJob';
import AddJobWhatWhereWhen from '../JobList/AddJob/AddJobWhatWhereWhen';
import AddTimeFrame from '../JobList/AddJob/AddTimeFrame';
import AddJobDetails from '../JobList/AddJob/AddJobDetails';
import AddReview from '../Profile/AddReview';

export default createRouter(() => ({
  navigationBar: () => NavigationBar,
  entry: () => Entry,
  signup: () => SignUp,
  profile: () => Profile,
  jobList: () => JobList,
  jobProfile: () => JobProfile,
  workerList: () => WorkerList,
  messages: () => Messages,
  addJob: () => AddJob,
  addReview: () => AddReview,
  addJobWhatWhereWhen: () => AddJobWhatWhereWhen,
  addJobDetails: () => AddJobDetails,
  addTimeFrame: () => AddTimeFrame,
}));
