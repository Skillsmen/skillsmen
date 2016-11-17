import {
  createRouter,
} from '@exponent/ex-navigation';

import ProfileScreen from './Profile/Profile';
import JobListScreen from './JobList/JobList';
import WorkerListScreen from './WorkerList/WorkerList';
import Messages from './Messages/Messages';
import NavigationBar from './NavigationBar';
import JobProfileScreen from './JobProfile/Profile';
import AddJob from './JobList/AddJob/AddJob';
import AddJobWhatWhereWhen from './JobList/AddJob/AddJobWhatWhereWhen';
import AddJobDetails from './JobList/AddJob/AddJobDetails';

export default createRouter(() => ({
  profile: () => ProfileScreen,
  jobList: () => JobListScreen,
  jobProfile: () => JobProfileScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  navigationBar: () => NavigationBar,
  addJob: () => AddJob,
  addJobWhatWhereWhen: () => AddJobWhatWhereWhen,
  addJobDetails: () => AddJobDetails,
}));
