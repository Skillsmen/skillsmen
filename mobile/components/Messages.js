import React from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

// Stack overflow has the below import to use socket.io w/ React-native, but
// doesn't seem necessary for the time being
// import './UserAgent';

// import io from 'socket.io-client/dist/socket.io';
import styles from '../styles/Messages';
import BackButton from '../reusableComponents/BackButton';

const blueImg = require('../assets/bluePatternBackground.png');

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };

    this.chatId = this.props.route.params.id || this.props.chatId;
    this.ownId = this.props.profile.id;

    // Right now, just using local host for testing... switch to ${settings.SERVER}/
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.socket = io('http://localhost:3000', { transports: ['websocket'] });
    // can use socket throughout this module by referencing this.socket.io
  }

  handleSubmit() {
    // this.socket.emit('message', this.state.message);
    this.props.newMessage({
      ChatId: this.chatId,
      text: this.state.message,
      UserId: this.props.profile.id,
    });
    this.setState({
      message: '',
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.bluePattern}
          source={blueImg}
        >
          <View style={styles.header}>
            <BackButton navigator={this.props.navigator} />
            <View style={styles.headerMid}>
              <Text style={styles.headerText}>Chat with</Text>
              <Text style={styles.headerName}>{ this.props.peer.name }</Text>
            </View>
            <View style={styles.placeHolder} />
          </View>
        </Image>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          {this.props.messageList &&
            this.props.messageList.map((msg, i) => {
              const ownMsg = msg.UserId === this.ownId;
              return (
                <View style={styles.messageRow} key={i}>
                  {!ownMsg &&
                    <Image
                      style={styles.peerMsgImage}
                      source={{ uri: this.props.peer.profilePicUrl }}
                    />
                  }
                  <View
                    style={[
                      (ownMsg ? styles.ownContainer : styles.peerContainer),
                      styles.message,
                    ]}
                  >
                    <Text style={ownMsg ? styles.ownMessage : styles.peerMessage}>
                      {msg.text}
                    </Text>
                  </View>
                </View>
              );
            })
          }
        </ScrollView>
        <View style={styles.sendRow}>
          <TextInput
            style={styles.inputText}
            onChangeText={(message) => {
              this.setState({ message });
            }}
            value={this.state.message}
            placeholder={`Type a message to ${this.props.peer.name}`}
          />
          <TouchableOpacity onPress={this.handleSubmit}>
            <FontAwesome
              name={'paper-plane-o'}
              size={25}
              color={'#434343'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Messages.propTypes = {
  newMessage: React.PropTypes.func,
  profile: React.PropTypes.object.isRequired,
  messageList: React.PropTypes.array,
  chatId: React.PropTypes.number,
  peer: React.PropTypes.object,
  route: React.PropTypes.object,
  navigator: React.PropTypes.object,
};

export default Messages;

