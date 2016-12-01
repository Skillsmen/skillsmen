import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

const ProfileCardContact = ({iconObj, text}) =>
  (
    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
      <FontAwesome
        name={iconObj.name || 'phone'}
        size={iconObj.size || 15}
        color={iconObj.color || 'blue'}
      />
      <Text style={{ marginLeft: 15 }}>{text}</Text>
    </TouchableOpacity>
  );

export default ProfileCardContact;
