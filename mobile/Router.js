import {
  createRouter,
} from '@exponent/ex-navigation';

import ProfileScreen from './Profile/Profile';
import JobListScreen from './JobList/JobList';
import WorkerListScreen from './WorkerList/WorkerList';
import Messages from './Messages/Messages';
import NavigationBar from './NavigationBar';
<<<<<<< d08c92ff94e504099f1b38a37a80df69654ec0ec
import JobProfileScreen from './JobProfile/Profile';

=======
import SignIn from './Onboarding/SignIn';
import SignUp from './Onboarding/SignUp';
>>>>>>> Add Signin/Signup routing func

export default createRouter(() => ({
  profile: () => ProfileScreen,
  jobList: () => JobListScreen,
  jobProfile: () => JobProfileScreen,
  workerList: () => WorkerListScreen,
  messages: () => Messages,
  navigationBar: () => NavigationBar,
  signin: () => SignIn,
  signup: () => SignUp,
}));
