import React from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';
import {
  Text,
  View
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';

import Router from './Router';

export default class RootNavigation extends React.Component {
  static renderIcon(name, isSelected, text) {
    const color = isSelected ? '#395b91' : '#434343';
    return (
      <View>
        <FontAwesome
          name={name}
          size={30}
          color={color}
        />
        <Text style={{color}}>
          {text}
        </Text>
      </View>
    );
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabNavigation
        tabBarHeight={64}
        initialTab="profile"
        style={{ flex: 1, flexDirection: 'column', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}
      >
        <TabNavigationItem
          id="profile"
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
          renderIcon={isSelected => RootNavigation.renderIcon('wrench', isSelected, 'Jobs')}
        >
          <StackNavigation
            id="jobList"
            initialRoute={Router.getRoute('jobList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="workerList"
          renderIcon={isSelected => RootNavigation.renderIcon('users', isSelected, 'Tradesman')}
        >
          <StackNavigation
            id="workerList"
            initialRoute={Router.getRoute('workerList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="chats"
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

