const initialState = {
  loggedIn: false,
  profile: {},
  username: '',
  token: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GRANT_ACCESS':
      return {
        loggedIn: true,
        profile: action.profile,
        username: action.username,
        token: action.token,
      };
    default: return state;
  }
};

export default appReducer;
