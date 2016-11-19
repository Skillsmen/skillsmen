const initialState = {
  token: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GRANT_ACCESS':
      return {
        token: action.token,
      };
    default: return state;
  }
};

export default appReducer;
