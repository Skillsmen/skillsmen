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

import getPicture from '../utils/getPicture';
import s3Uploader from '../utils/s3Uploader';
const AddPhoto = () => {
  return (
    <TouchableOpacity 
    style={{backgroundColor: 'rgba(0,0,0,0)'}}
    onPress={
      getPicture((content)=>
        s3Uploader(content.uri.slice(6))
          .then((result) => { console.log('result from s3 ', result.data.image0, result.data.image2, result.data.image1) })
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
  )
}

export default AddPhoto;