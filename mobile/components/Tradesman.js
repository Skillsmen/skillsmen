import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import styles from '../styles/WorkerList';
import TradieBanner from './TradieBanner';

const Tradesman = ({ userInfo, pressUser, background }) => {
  return (
    <TouchableOpacity onPress={pressUser} style={{ backgroundColor: `${background}`, borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da' }}>
      <View className="tradieRow" style={styles.row}>
        <Image
          style={styles.circularImage}
          source={{ uri: userInfo.profilePicUrl }}
        />
        <View style={styles.tileRight}>
          <Text style={{ fontSize: 22, fontWeight: '300' }}>{userInfo.name}</Text>
          <TradieBanner
            profession={userInfo.profession}
            location={userInfo.location}
            rating={userInfo.Reviews.length}
            styles={styles}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Tradesman;
    // <TouchableOpacity onPress={pressUser} style={{ backgroundColor: `${background}`, borderRadius: 4, borderWidth: 0.5, borderColor: '#d6d7da', padding: 12 }}>
    //   <View className="tradieRow" style={styles.row}>
    //     <View style={styles.rightRow}>
    //       <View style={styles.rowUserPic}>
    //         <Image
    //           style={styles.posterImageIcon}
    //           source={{ uri: userInfo.profilePicUrl }}
    //         />
    //       </View>
    //     </View>
    //     <View style={{ margin: 15 }}>
    //       <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{userInfo.name}</Text>
    //     </View>
    //       <TradieBanner
    //         profession={userInfo.profession}
    //         location={userInfo.location}
    //         rating={userInfo.Reviews.length}
    //         styles={styles}
    //       />
    //   </View>
    // </TouchableOpacity>
