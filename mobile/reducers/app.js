const initialState = {
  loggedIn: false,
  profile: null,
  username: null,
  token: null,
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
