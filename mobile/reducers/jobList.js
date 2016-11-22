
const jobListReducer = (state = { jobList: [] }, action) => {
  switch (action.type) {
    case ('ADD_JOB'):
      return {
        jobList: [...state.jobList, action.newJob],
      };
    default: return state;
  }
};

export default jobListReducer;
