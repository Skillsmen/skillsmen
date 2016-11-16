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
    <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
      <FontAwesome
        name={iconObj.name || 'phone'}
        size={iconObj.size || 15}
        color={iconObj.color || 'blue'}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );

export default ProfileCardContact;
