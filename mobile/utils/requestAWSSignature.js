
/* eslint-env browser*/
import axios from 'axios';
import settings from '../settings';

const uploadFile = function uploadFile(file, signedRequest, url) {
  axios.put(signedRequest, file)
  .then(() => {
    // assign expected url to profile image
  })
  .catch((err) => {
    console.error(err);
  });
};

const getSignedRequest = function getSignedRequest(obj) {
  axios(`${settings.SERVER}/sign-s3`, {
    params: obj,
  })
  .then((res) => {
    uploadFile('../assets/theBoot.png', res.data.signedRequest, res.data.url);
  })
  .catch((err) => { console.error('error in getSignedRequest', err); });
};

export default getSignedRequest;
