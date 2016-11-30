import axios from 'axios';
import settings from '../settings';

export default class Actions {
  static grantAccess(token) {
    return {
      type: 'GRANT_ACCESS',
      token,
    };
  }

  static setWorkerList(workers) {
    return {
      type: 'UPDATE_WORKERLIST',
      workers,
    };
  }

  static setJobList(jobs, latest) {
    return {
      type: 'UPDATE_JOBLIST',
      jobs,
      latest,
    };
  }

  static toggleShowMap(showMap) {
    return {
      type: 'TOGGLE_SHOW_MAP',
      showMap,
    };
  }

  // Updates the profile on the store
  static updateProfile(diff, upload) {
    return (dispatch, getState) => {
      dispatch({ type: 'UPDATE_PROFILE', diff });
      if (upload) {
        const profile = getState().profile;
        // upload profile to the server after completing onboarding questions
        axios.post(`${settings.SERVER}/user/`, {
          username: profile.username,
          password: profile.password,
          name: profile.name,
          profession: profile.profession,
          description: profile.description,
          experience: profile.experience,
          location: profile.location,
          mobile: profile.mobile,
          profilePicUrl: profile.profilePicUrl,
        })
        .then((response) => {
          dispatch({
            type: 'UPDATE_PROFILE',
            diff: { id: response.data.id },
          });
        })
        .catch((error) => {
          console.log('error posting new user in db', error.message);
        });
      }
    };
  }

  static newJob(jobDetails) {
    return (dispatch, getState) => {

      console.log('jobDetails in newJob action: ', jobDetails);

      const newJob = {
        description: jobDetails.description,
        from: jobDetails.from,
        to: jobDetails.to,
        hires: jobDetails.hires,
        title: jobDetails.title,
        pay: jobDetails.pay,
        profession: jobDetails.profession,
        UserId: getState().profile.id,
        lat: jobDetails.lat,
        lng: jobDetails.lng,
        address: jobDetails.location,
        User: {
          id: getState().profile.id,
          username: getState().profile.username,
          password: getState().profile.password,
          name: getState().profile.name,
          mobile: getState().profile.mobile,
          profession: getState().profile.profession,
          description: getState().profile.description,
          experience: getState().profile.experience,
          location: getState().profile.location,
          profilePicUrl: getState().profile.profilePicUrl,
        },
      };

      dispatch({ type: 'ADD_JOB', job: newJob });
      axios.post(`${settings.SERVER}/job/`, newJob)
      .then((newJob) => {
        console.log('newJob post successful');
      })
      .catch((error) => {
        console.log('error posting new job to database', error.message);
      });
    };
  }

  // Updates the workerlist on the store
  static updateWorkerList() {
    return (dispatch, getState) => {
      const latest = getState().workerList.latest;
      axios.get(`${settings.SERVER}/latest/${latest}`)
      .then((response) => {
        if (response.data.length > 0) {
          dispatch({
            type: 'UPDATE_WORKERLIST',
            workers: response.data,
            latest: response.data[0].updatedAt,
          });
        }
      })
      .catch((error) => {
        console.log('error updating workerlist', error);
      });
    };
  }

  static updateJobList() {
    console.log('updateJobList running!');
    return (dispatch, getState) => {
      const latest = getState.jobList.latest;
      axios.get(`${settings.SERVER}/job`)
      .then((response) => {
        if (response.data.length > 0) {
          console.log('jobList get request: ', response.data);
          dispatch({
            type: 'UPDATE_JOBLIST',
            jobs: response.data,
          });
        }
        console.log('NO JOBS RETURNED FROM DB');
      })
      .catch((error) => {
        console.log('error updating joblist', error);
      });
    };
  }

  static changeJobFilter(filter) {
    return {
      type: 'CHANGE_FILTER',
      filter,
    };
  }

  static populateChatList(userId) {
    return (dispatch) => {
      axios.get(`${settings.SERVER}/chat/${userId}`)
      .then((res) => {
        dispatch({
          type: 'POPULATE_CHAT_LIST',
          chatList: res.data,
        });
      })
      .catch((error) => {
        console.log('error retrieving users chats', error);
      });
    };
  }

  static goToChat(chatId, chatPeer, messageList = []) {
    return (dispatch) => {
      dispatch({
        type: 'GO_TO_CHAT',
        chatId,
        chatPeer,
        messageList,
      });
    };
  }

  static newMessage(message) {
    return (dispatch) => {
      axios.post(`${settings.SERVER}/message`, message)
      .then((res) => {
        console.log('[action index] message posted to db', res);
        dispatch({
          type: 'ADD_MESSAGE',
          message: res.data,
        });
      })
      .catch((error) => {
        console.log('error adding new message', error);
      });
    };
  }
}
