import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import styles from '../styles/ChatList';

const ChatTile = ({ chat, goToChat, profile, ind }) => {
  const otherUser = chat.user1.id === profile.id ? chat.user2 : chat.user1;
  const handleClick = () => goToChat(chat.id, otherUser, chat.Messages);

  const backgroundColor = ind % 2 === 0 ? 'transparent' : '#DCDCDC';

  const someMessages = chat.Messages.length > 0;
  let lastMessage = someMessages ? `${chat.Messages[chat.Messages.length - 1].text}` : 'No messages... yet';
  lastMessage = lastMessage.length > 46 ? `${lastMessage.slice(0, 43)}...` : lastMessage;
  const createdAt = someMessages ? moment(lastMessage.createdAt).fromNow() : '';
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={[styles.row, { backgroundColor }]}>
        <Image
          style={styles.circularImage}
          source={{ uri: otherUser.profilePicUrl }}
        />
        <View style={styles.tileRight}>
          <Text style={styles.name}>{otherUser.name}</Text>
          <Text style={styles.tileMessage}>{lastMessage}</Text>
          <Text style={styles.tileDate}>{createdAt}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ChatTile.propTypes = {
  chat: React.PropTypes.object.isRequired,
  goToChat: React.PropTypes.func.isRequired,
  ind: React.PropTypes.number.isRequired,
  profile: React.PropTypes.object,
};

export default ChatTile;
