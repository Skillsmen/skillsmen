import axios from 'axios';
import settings from '../settings';

const s3Uploader = (picSrc) => {
  const file = new FormData();
  file.append('image', { uri: picSrc, name: 'aName.jpg' });

  // return fetch(`${settings.SERVER}/s3-uploader`, {
  //   method: 'POST',
  //   file: body,
  // });

  return axios.post(`${settings.SERVER}/s3-uploader`, file);
};

export default s3Uploader;
