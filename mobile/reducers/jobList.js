const initialState = {
  jobList: [],
  filter: '',
  showMap: false,
};

const jobListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_JOB'):
      return {
        jobList: [...state.jobList, action.newJob],
        filter: state.filter,
        showMap: false,
      };
    case ('TOGGLE_SHOW_MAP'):
      return {
        jobList: [...state.jobList],
        showMap: action.showMap,
      };
    case ('UPDATE_JOBLIST'):
      return {
        jobList: [...state.jobList, ...action.jobs],
        filter: state.filter,
        showMap: false,
        // latest: action.latest || state.latest,
      };
    case 'CHANGE_FILTER':
      return {
        jobList: state.jobList,
        filter: action.filter,
      };
    default: return state;
  }
};

export default jobListReducer;
