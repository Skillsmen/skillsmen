import React from 'react';
import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem,
} from '@exponent/ex-navigation';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import Router from './Router';

export default class RootNavigation extends React.Component {
  static renderIcon(name, isSelected) {
    return (
      <FontAwesome
        name={name}
        size={55}
        color={isSelected ? '#395b91' : '#434343'}
      />
    );
  }

  render() {
    return (
      <TabNavigation
        tabBarHeight={64}
        initialTab="profile"
      >
        <TabNavigationItem
          id="profile"
          renderIcon={isSelected => RootNavigation.renderIcon('home', isSelected)}
        >
          <StackNavigation
            id="profile"
            navigatorUID="profile"
            initialRoute={Router.getRoute('profile')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="JobList"
          renderIcon={isSelected => RootNavigation.renderIcon('wrench', isSelected)}
        >
          <StackNavigation
            id="jobList"
            initialRoute={Router.getRoute('jobList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="workerList"
          renderIcon={isSelected => RootNavigation.renderIcon('users', isSelected)}
        >
          <StackNavigation
            id="workerList"
            initialRoute={Router.getRoute('workerList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="messages"
          renderIcon={isSelected => RootNavigation.renderIcon('envelope', isSelected)}
        >
          <StackNavigation
            id="messages"
            initialRoute={Router.getRoute('jobProfile')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}
