import { combineReducers } from 'redux';
import onboardingReducer from './onboarding';
import profileReducer from './profile';
import messagesReducer from './messages';
import jobListReducer from './jobList';
import jobPageReducer from './jobPage';
import workerListReducer from './workerList';
import appReducer from './app';

const mainReducer = combineReducers({
  app: appReducer,
  onboardingReducer,
  profileReducer,
  messagesReducer,
  jobListReducer,
  jobPageReducer,
  workerListReducer,
});

export default mainReducer;
