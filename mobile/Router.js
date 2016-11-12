import {
  createRouter,
} from '@exponent/ex-navigation';

import ProfileScreen from './Profile/Profile';
import JobListScreen from './JobList/JobList';
import WorkerListScreen from './WorkerList/WorkerList';
import Messages from './Messages/Messages';
import NavigationBar from './NavigationBar';
import JobProfileScreen from './JobProfile/Profile';

export default createRouter(() => ({
  profile: () => ProfileScreen,
  jobList: () => JobListScreen,
  jobProfile: () => JobProfileScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  navigationBar: () => NavigationBar,
}));
