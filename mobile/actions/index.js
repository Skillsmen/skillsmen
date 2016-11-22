import axios from 'axios';
export default class Actions {
  static grantAccess(token) {
    return {
      type: 'GRANT_ACCESS',
      token,
    };
  }

  static updateProfile(diff, upload) {
    return (dispatch, getState) => {
      dispatch({ type: 'UPDATE_PROFILE', diff });
      if (upload) {
        const profile = getState().profile;
        console.log('profile from onboard POST', profile);
        // upload profile to the server after completing onboarding questions
        axios.post('http://127.0.0.1:3000/user/', {
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
          console.log('response from onboarding POST', response.data.id);
          dispatch({
            type: 'UPDATE_PROFILE',
            diff: { id: response.data.id },
          });
        })
        .catch((error) => {
          console.log('error posting new user in database', error);
        });
      }
    };
  }
  static newJob(jobDetails) {
    return (dispatch, getState) => {
      const profile = getState().profile;
      const newJob = {
        description: jobDetails.description,
        location: jobDetails.location,
        time: jobDetails.time,
        hires: jobDetails.hires,
        title: jobDetails.title,
        pay: jobDetails.pay,
        profession: jobDetails.profession,
        UserId: profile.id,
      };
      // upload profile to the server after completing onboarding questions
      axios.post('http://127.0.0.1:3000/job/', newJob)
      .then((response) => {
        dispatch({type: 'ADD_JOB', job: newJob});
      })
      .catch((error) => {
        console.log('error posting new user in database', error);
      });
    };
  }
}
