import axios from 'axios';
import settings from '../settings';

export default class Actions {
  static grantAccess(token) {
    return {
      type: 'GRANT_ACCESS',
      token,
    };
  }

  static getToken() {
    return {
      type: 'SOMETHINGELSE',
    };
  }

  static signIn(username, password) {
    return (dispatch, getState) => {
      if (username !== '' && password !== '') {
        // TODO: Validate the user info by querying the server
        axios.post(`${settings.SERVER}/signin/`, {
          username,
          password,
        })
        .then((response) => {
          console.log('response from sign in POST', response.data);
          // Update the global store with info from the server
          dispatch(Actions.updateProfile(response.data[0]));
          dispatch(Actions.grantAccess('token string generated from server'));
        })
        .catch((error) => {
          console.log('[ERROR]: Bad login');
        });
      }
    };
  }

  static loadWorkerList() {
    return (dispatch, getState) => {
      axios.get(`${settings.SERVER}/user/`)
      .then((response) => {
        console.log('got all users on startup');
        if (response.data.length > 0) {
          dispatch({
            type: 'UPDATE_WORKERLIST',
            workers: response.data,
            latest: response.data[0].updatedAt,
          });
        }
      })
      .catch((error) => {
        console.log('error loading worker list from db', error);
      });
    };
  }

  static loadJobList() {
    return (dispatch, getState) => {
      axios.get('http://localhost:3000/job')
      .then((response) => {
        if (response.data.length > 0) {
          console.log('inside loadJobList response', response);
          dispatch({
            type: 'UPDATE_JOBLIST',
            jobs: response.data,
            // latest: response.data[0].updatedAt,
          });
        }
      })
      .catch((error) => {
        console.log('error loading job list from db', error);
      });
    }
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
      const newJob = {
        description: jobDetails.description,
        location: jobDetails.location,
        from: jobDetails.from,
        to: jobDetails.to,
        hires: jobDetails.hires,
        title: jobDetails.title,
        pay: jobDetails.pay,
        profession: jobDetails.profession,
        UserId: getState().profile.id,
      };

      axios.post(`${settings.SERVER}/job/`, newJob)
      .then(() => {
        dispatch({ type: 'ADD_JOB', job: newJob });
      })
      .catch((error) => {
        console.log('error posting new user in database', error);
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
    return (dispatch, getState) => {
      // const latest = getState.jobList.latest;
      // console.log('the latest job', latest);
      axios.get('http://127.0.0.1:3000/job')
      .then((response) => {
        if (response.data.length > 0) {
          dispatch({
            type: 'UPDATE_JOBLIST',
            jobs: response.data,
          });
        }
      })
      .catch((error) => {
        console.log('error updating joblist', error);
      });
    };
  }
}
