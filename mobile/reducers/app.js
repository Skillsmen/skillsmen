const initialState = {
  loggedIn: true,
  profile: {},
  username: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GRANT_ACCESS':
      return {
        token: action.token,
        profile: state.profile,
      };
    default: return state;
  }
};

export default appReducer;
