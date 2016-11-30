const initialState = {
  jobList: [],
  filter: '',
  showMap: false,
};

const jobListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ('ADD_JOB'):
    console.log('in ADD JOB reducer! action: ', action);
      return {
        jobList: [...state.jobList, action.job],
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
