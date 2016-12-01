import { combineReducers } from 'redux';
import profileReducer from './profile';
import chatsReducer from './messages';
import jobListReducer from './jobList';
import jobPageReducer from './jobPage';
import workerListReducer from './workerList';
import appReducer from './app';

const mainReducer = combineReducers({
  app: appReducer,
  profile: profileReducer,
  workerList: workerListReducer,
  chats: chatsReducer,
  jobList: jobListReducer,
  messagesReducer,
  jobPageReducer,
});

export default mainReducer;
