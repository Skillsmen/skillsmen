import {
  createRouter,
} from '@exponent/ex-navigation';

import ProfileScreen from './Profile/Profile';
import JobListScreen from './JobList/JobList';
import WorkerListScreen from './WorkerList/WorkerList';
import Messages from './Messages/Messages';
import NavigationBar from './NavigationBar';

export default createRouter(() => ({
  profile: () => ProfileScreen,
  jobList: () => JobListScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  navigationBar: () => NavigationBar,
}));
