import {
  createRouter,
} from '@exponent/ex-navigation';

import ProfileScreen from './Profile/Profile';
import AddReview from './Profile/AddReview';
import JobListScreen from './JobList/JobList';
import WorkerListScreen from './WorkerList/WorkerList';
import Messages from './Messages/Messages';
import NavigationBar from './NavigationBar';
import JobProfileScreen from './JobProfile/Profile';
import AddJob from './JobList/AddJob/AddJob';
import AddJobWhatWhereWhen from './JobList/AddJob/AddJobWhatWhereWhen';
import AddJobDetails from './JobList/AddJob/AddJobDetails';
import EntryScreen from './Onboarding/Entry';

export default createRouter(() => ({
  profile: () => ProfileScreen,
  addReview: () => AddReview,
  jobList: () => JobListScreen,
  jobProfile: () => JobProfileScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  navigationBar: () => NavigationBar,
  addJob: () => AddJob,
  addJobWhatWhereWhen: () => AddJobWhatWhereWhen,
  addJobDetails: () => AddJobDetails,
  entry: () => EntryScreen,
}));
