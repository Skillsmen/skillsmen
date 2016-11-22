const workerListReducer = (state = {}, action) => {
  switch (action.type) {
    case ('NEW_JOB'): 
      return action.newJob;
    default: return state;
  }
};

export default workerListReducer;
