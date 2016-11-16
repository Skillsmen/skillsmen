import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const ContractorTitle = jobOwner => 
  (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text style={{ flex: 1, fontSize: 19, fontWeight: 'bold', marginLeft: 15 }}>
        {jobOwner.ownerName}
        <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#D3D3D3', marginLeft: 15 }}>
          {'     Contractor'}
        </Text>
      </Text>
    </View>
  );

export default ContractorTitle;
