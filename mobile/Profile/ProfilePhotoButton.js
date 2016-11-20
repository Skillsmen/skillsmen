import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Actions from '../actions/index.js';
import getPicture from '../utils/getPicture';
import s3Uploader from '../utils/s3Uploader';

const AddPhoto = () =>
  (
    <TouchableOpacity 
    style={{ backgroundColor: 'rgba(0,0,0,0)' }}
    onPress={
      getPicture(content =>
        s3Uploader(content.uri.slice(6))
          .then(result => 
            result.data
          )
          .then((imageUrl) => {

          })
          .catch((err) => { console.error(err) })
      )
    }
    >
      <FontAwesome
        name="camera"
        size={40}
        color={'#DCDCDC'}

      />
    </TouchableOpacity>
  );

export default AddPhoto;

            // dispatch(
            //   Actions.updateProfile(
            //     {
            //       picUrls: {
            //         orig: imageUrl.image0,
            //         small: imageUrl.image1,
            //         thumb: imageUrl.image2,
            //       },
            //     })
            // );