import React from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Router from './Router';

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#F6F6F6',
    borderWidth: 0,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 1,
  },
  wholebar: {
  },
});

export default class RootNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  static renderIcon(name, isSelected, text) {
    const color = isSelected ? '#395b91' : '#434343';
    return (
      <View style={styles.content}>
        <FontAwesome
          name={name}
          size={32}
          color={color}
        />
        <Text style={styles.text}>
          {text}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <TabNavigation
        tabBarHeight={60}
        initialTab="profile"
        style={styles.wholebar}
      >
        <TabNavigationItem
          id="profile"
          style={styles.bar}
          renderIcon={isSelected => RootNavigation.renderIcon('home', isSelected, 'Profile')}
        >
          <StackNavigation
            id="profile"
            navigatorUID="profile"
            initialRoute={Router.getRoute('profile', {
              peerProfile: false })}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="jobList"
          style={styles.bar}
          renderIcon={isSelected => RootNavigation.renderIcon('wrench', isSelected, 'Jobs')}
        >
          <StackNavigation
            id="jobList"
            initialRoute={Router.getRoute('jobList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="workerList"
          style={styles.bar}
          renderIcon={isSelected => RootNavigation.renderIcon('user-plus', isSelected, 'Tradesman')}
        >
          <StackNavigation
            id="workerList"
            initialRoute={Router.getRoute('workerList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="chats"
          style={styles.bar}
          renderIcon={isSelected => RootNavigation.renderIcon('envelope', isSelected, 'Messages')}
        >
          <StackNavigation
            id="chats"
            initialRoute={Router.getRoute('chats')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

RootNavigation.propTypes = {
  profile: React.PropTypes.object,
};

