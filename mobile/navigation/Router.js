/*
  ===================================================================
  THIS IS THE NEW ROUTER FILE: HAD TO MAKE ONE FOR THE REDUX OVERHAUL
  ===================================================================
*/

import {
  createRouter,
} from '@exponent/ex-navigation';

import NavigationBar from './NavigationBar';
import EntryScreen from '../containers/Entry';
import SignUpScreen from '../containers/SignUp';

import ProfileScreen from '../Profile/Profile';
import JobListScreen from '../JobList/JobList';
import WorkerListScreen from '../WorkerList/WorkerList';
import Messages from '../Messages/Messages';
import JobProfileScreen from '../JobProfile/Profile';
import AddJob from '../JobList/AddJob/AddJob';
import AddJobWhatWhereWhen from '../JobList/AddJob/AddJobWhatWhereWhen';
import AddJobDetails from '../JobList/AddJob/AddJobDetails';

export default createRouter(() => ({
  navigationBar: () => NavigationBar,
  entry: () => EntryScreen,
  signup: () => SignUpScreen,
  profile: () => ProfileScreen,
  jobList: () => JobListScreen,
  jobProfile: () => JobProfileScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  addJob: () => AddJob,
  addJobWhatWhereWhen: () => AddJobWhatWhereWhen,
  addJobDetails: () => AddJobDetails,
}));
