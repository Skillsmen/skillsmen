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
  renderIcon(name, isSelected) {
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
          renderIcon={isSelected => this.renderIcon('home', isSelected)}
        >
          <StackNavigation
            id="profile"
            navigatorUID="profile"
            initialRoute={Router.getRoute('profile')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="JobList"
          renderIcon={isSelected => this.renderIcon('wrench', isSelected)}
        >
          <StackNavigation
            id="jobList"
            initialRoute={Router.getRoute('jobList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="workerList"
          renderIcon={isSelected => this.renderIcon('users', isSelected)}
        >
          <StackNavigation
            id="workerList"
            initialRoute={Router.getRoute('workerList')}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="messages"
          renderIcon={isSelected => this.renderIcon('envelope', isSelected)}
        >
          <StackNavigation
            id="messages"
            initialRoute={Router.getRoute('messages')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}
