import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const { height, width } = Dimensions.get('window');

const ProfileCard = ({ jobOwner, picStyles }) => {
  const proPicLoad = (user) => {
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
  return (
    <View style={{ flex: 2, flexDirection: 'column', backgroundColor: 'transparent' }}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Text style={{ flex: 1, fontSize: 19, fontWeight: 'bold', marginLeft: 15 }}>
          {jobOwner.ownerName}
          <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#D3D3D3', marginLeft: 15 }}>
            {'     Contractor'}
          </Text>
        </Text>
      </View>
      <View style={{ flex: 4, flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>
          {proPicLoad(jobOwner)}
        </View>
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
            <FontAwesome
              name="phone"
              size={30}
              color="#006600"
            />
            <Text>{jobOwner.mobile}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
            <FontAwesome
              name={'comment-o'}
              size={30}
              color={'#395b91'}
            />
            <Text>{'Send a message!'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
