const initialState = {
  filter: '',
  workers: [],
  latest: '',
};

const workerListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_WORKERLIST':
      return {
        filter: state.filter,
        workers: [...state.workers, ...action.workers],
        latest: action.latest || state.latest,
      };
    default: return state;
  }
};

export default workerListReducer;
