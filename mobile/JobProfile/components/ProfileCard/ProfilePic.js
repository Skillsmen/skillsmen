import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const proPicLoad = (user, width, height) => {
  if (!user.pic) {
    return (<FontAwesome
      name={'user-circle'}
      size={60}
      color={'#395b91'}
      style={{ flex: 1 }}
    />);
  }
  return (<Image
    source={user.pic}
    style={{
      borderRadius: width * 0.1 * 0.12,
      width: width * 0.1,
      height: width * 0.1,
      margin: 0.05 * height,
    }}
  />);
};
const ProfilePic = (jobOwner, width, height) =>
  (
    <View style={{ flex: 1 }}>
      {proPicLoad(jobOwner, width, height)}
    </View>
  );

export default ProfilePic;
