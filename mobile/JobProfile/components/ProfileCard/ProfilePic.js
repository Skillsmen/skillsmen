import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';


const proPicLoad = (jobOwner, width, height) => {

  if (!jobOwner.jobOwner.profilePicUrl) {
    return (<FontAwesome
      name={'user-circle'}
      size={60}
      color={'#395b91'}
      style={{ flex: 1 }}
    />);
  }

  return (
    <View>
      <Image
        source={{ uri: jobOwner.jobOwner.profilePicUrl }}
        style={{
          borderRadius: 40,
          width: 80,
          height: 80,
          marginLeft: width * 0.1,
        }}
      />
    </View>
  );
};
const ProfilePic = (jobOwner, width, height) =>
  (
    <View style={{ flex: 1 }}>
      {proPicLoad(jobOwner, width, height)}
    </View>
  );

export default ProfilePic;
