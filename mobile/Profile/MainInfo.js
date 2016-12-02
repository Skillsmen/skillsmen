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
    fontSize: 26,
    fontWeight: '300',
    marginTop: 15,
    marginBottom: 15,
  },
  experience: {
    fontSize: 12,
    lineHeight: 20,
    width: width * 0.85,
    marginBottom: 10,
  },
  contact: {
    width,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneNumber: {
    color: '#006600',
    alignItems: 'center',
    fontSize: 20,
  },
  button: {
    width: width * 0.35,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButton: {
    borderColor: '#385B96',
    marginRight: 10,
  },
  callButton: {
    borderColor: '#15AC25',
    marginLeft: 10,
  },
  chatText: {
    color: '#385B96',
    fontSize: 16,
    marginTop: 5,
  },
  callText: {
    color: '#15AC25',
    fontSize: 16,
    marginTop: 5,
  },
  banner: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 15,
    width,
  },
  bannerText: {
    fontSize: 12,
    fontWeight: '200',
    color: '#424242',
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
      <Text style={styles.name}> {userInfo.name}</Text>
      <ModularBanner
        iconArr={icons}
        propertyArr={[userInfo.profession, userInfo.location, `${userInfo.experience} years`]}
        styles={styles.banner}
        iconStyles={styles.icon}
        textStyle={styles.bannerText}
      />
      <Text style={styles.experience}>
        {userInfo.description}
      </Text>
      { peer &&
      <View style={styles.contact}>
        <TouchableOpacity style={[styles.button, styles.chatButton]} onPress={handleChatClick}>
          <FontAwesome
            name="envelope"
            size={26}
            color="#385B96"
          />
          <Text style={styles.chatText}> Message </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.callButton]} onPress={handlePhoneClick}>
          <FontAwesome
            name="phone"
            size={26}
            color="#15AC25"
          />
          <Text style={styles.callText}>Call Mobile</Text>
        </TouchableOpacity>
      </View>
      }
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
