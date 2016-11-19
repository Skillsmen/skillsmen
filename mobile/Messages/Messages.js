import React from 'react';
import {
  View,
  Image,
  Text,
} from 'react-native';

const Messages = () =>
  (
    <View >
    <Text>Messages</Text>
      <Image
      style={{height: 64, width: 64}}
      source={{uri: 'https://s3.amazonaws.com/puffyshirts/images/c524b7dd-8e8f-4cfc-8902-b2a6f0a48283-small.jpg'}}
      />
    </View>
  );

export default Messages;
