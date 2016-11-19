import { combineReducers } from 'redux';
import profileReducer from './profile';
import messagesReducer from './messages';
import jobListReducer from './jobList';
import jobPageReducer from './jobPage';
import workerListReducer from './workerList';
import appReducer from './app';

const mainReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  messagesReducer,
  jobListReducer,
  jobPageReducer,
  workerListReducer,
});

export default mainReducer;
