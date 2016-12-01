import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import axios from 'axios';
import settings from '../settings';
import Router from '../navigation/Router';
import ModularBanner from '../reusableComponents/Banner/ModularBanner';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
  },
  name: {
    fontSize: 34,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  contact: {
    width,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  phoneNumber: {
    color: '#006600',
    alignItems: 'center',
    fontSize: 20,
  },
  chatButton: {
    backgroundColor: '#395b91',
    height: 22,
  },
  banner: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 10,
    width,
  },
  icon: {
  },
});

const icons = ['wrench', 'globe', 'clock-o'];
// userInfo and ownInfo are different when looking at a peer's profile.
// these are used when a new chat is created
const MainInfo = ({ peer, userInfo, ownInfo, navigator, goToChat }) => {
  const handlePhoneClick = () => {
    Linking.canOpenURL(userInfo.mobile).then((supported) => {
      if (supported) {
        Linking.openURL(userInfo.mobile);
      } else {
        console.log(`Don't know how to open URI: ${userInfo.mobile}`);
      }
    });
  };
  const handleChatClick = () => {
    axios.get(`${settings.SERVER}/chat/${userInfo.id}/${ownInfo.id}`)
    .then((res) => {
      // Check if there is an existing chat between users in the database
      if (res.data.length > 0) {
        const chat = res.data[0];
        const peerInfo = chat.user1.id === ownInfo.id ? chat.user2 : chat.user1;
        goToChat(chat.id, peerInfo, chat.Messages);
        navigator.push(Router.getRoute('messages', chat));
      // If no preexisting chat, create a new one and go to it
      } else {
        const chatInfo = {
          Participant1: userInfo.id,
          Participant2: ownInfo.id,
        };
        axios.post(`${settings.SERVER}/chat`, chatInfo)
        .then((resp) => {
          navigator.push(Router.getRoute('messages', resp.data));
        });
      }
    })
    .catch(err => console.log('error in profile MainInfo', err));
  };

  return (
    <View style={styles.container}>
      <ModularBanner
        iconArr={icons}
        propertyArr={[userInfo.profession, userInfo.location, `${userInfo.experience} years`]}
        styles={styles.banner}
        iconStyles={styles.icon}
      />
      <Text style={styles.name}> {userInfo.name}</Text>
      <Text style={styles.experience}>
        {userInfo.description}
      </Text>
      <View style={styles.contact}>
        <Text style={styles.phoneNumber} onPress={handlePhoneClick}>
          <FontAwesome
            name="phone"
            size={20}
            color="#006600"
          />
          {` ${userInfo.mobile}`}
        </Text>
        { peer &&
        <TouchableOpacity style={styles.chatButton} onPress={handleChatClick}>
          <Text style={{ color: 'white' }}> Chat </Text>
        </TouchableOpacity>
        }
      </View>
    </View>
  );
};

MainInfo.propTypes = {
  peer: React.PropTypes.bool,
  userInfo: React.PropTypes.object,
  ownInfo: React.PropTypes.object,
  goToChat: React.PropTypes.func,
  navigator: React.PropTypes.object,
};


export default MainInfo;
