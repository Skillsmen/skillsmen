const initialState = {
  username: '',
  password: '',
  name: '',
  mobile: '',
  profession: '',
  description: '',
  experience: '',
  location: '',
  profilePicUrl: 'https://s3.amazonaws.com/puffyshirts/missing-profile.jpg',
  id: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return Object.assign({}, state, action.diff);
    default: return state;
  }
};

export default profileReducer;
