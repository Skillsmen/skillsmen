export default class Actions {
  static grantAccess(token) {
    return {
      type: 'GRANT_ACCESS',
      token,
    };
  }

  static updateProfile(diff, upload) {
    return (dispatch, getState) => {
      dispatch({ type: 'UPDATE_PROFILE', diff });
      if (upload) {
        const profile = getState().profile;
        console.log('[TODO]: upload the following profile to the server', profile);
        // upload profile to the server.
      }
    };
  }
}
