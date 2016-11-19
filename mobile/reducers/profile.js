const initialState = {
  name: '',
  years: '',
  contact: '',
  location: '',
  description: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return Object.assign({}, state, action.diff);
    default: return state;
  }
};

export default profileReducer;
