import {
  createRouter,
} from '@exponent/ex-navigation';

import ProfileScreen from './Profile';
import JobListScreen from './JobList';
import WorkerListScreen from './WorkerList';
import Messages from './Messages';
import NavigationBar from './NavigationBar';

export default createRouter(() => ({
  profile: () => ProfileScreen,
  jobList: () => JobListScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  navigationBar: () => NavigationBar,
}));
