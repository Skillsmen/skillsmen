import Exponent from 'exponent';
import Promise from 'bluebird';

const getPicture = (cb) => {
  return () => 
  new Promise((resolve) => {
    resolve(Exponent.ImagePicker.launchImageLibraryAsync());
  })
  .then((imageResult) => {
    if (imageResult.cancelled) {
      console.log('user has cancelled');
    }
    console.log('GOT IMAGE ', imageResult.uri);
    cb(imageResult);
  });
};

export default getPicture;
