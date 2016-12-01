import React from 'react';
import {
  View,
  Dimensions,
} from 'react-native';

import ProfileCardContact from './ProfileCardContact';
import ContractorTitle from './ContractorTitle';
import ProfilePic from './ProfilePic';

const { height, width } = Dimensions.get('window');

const ProfileCard = ({ jobOwner, picStyles }) =>
  (
    <View style={{ flex: 2, flexDirection: 'column', backgroundColor: 'transparent' }}>
      <ContractorTitle jobOwnerName={jobOwner} />
      <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'center' }}>
        <ProfilePic jobOwner={jobOwner} width={width} height={height} />
        <View style={{ flex: 3, flexDirection: 'column' }}>
          <ProfileCardContact
            iconObj={{ color: '#006600', name: 'phone', size: 30 }}
            text={jobOwner.mobile}
          />
          <ProfileCardContact
            iconObj={{ color: '#395b91', name: 'comment-o', size: 30 }}
            text={'Send a message!'}
          />
        </View>
      </View>
    </View>
  );

export default ProfileCard;
