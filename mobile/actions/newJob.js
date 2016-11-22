import axios from 'axios';

static newJob(diff, upload) {
  return (dispatch, getState) => {
    if (upload) {
      const newJob = getState().newJob;
      const profile = getState().profile;
      // upload profile to the server after completing onboarding questions
      axios.post('http://127.0.0.1:3000/job/', {
        description: newJob.description
        location: newJob.location
        time: newJob.time
        hires: newJob.hires
        title: newJob.title
        pay: newJob.pay
        profession: newJob.profession
        ownerId: profile.id 
      })
      .then((response) => {
      })
      .catch((error) => {
        console.log('error posting new user in database', error);
      });
    }
  };
}

