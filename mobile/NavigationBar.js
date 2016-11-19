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
// placeholder for get request 
const userInfo = {
  "id":2,
  "mobile": "(555)555-5555",
  "first_name": "Angela",
  "last_name": "Garza",
  "experience_years": '10 years',
  "description": "Fully-configurable demand-driven interface. Function-based optimal intranet",
  "reviews": "9",
  "location": "Daxing",
  "street": "8767 Corben Terrace",
  "expertise": "Business Systems Development Analyst",
};

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

  constructor(props) {
    super(props);
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
            initialRoute={Router.getRoute('profile', {
              profile: this.props.profile,
              user: userInfo,
              peerProfile: false })}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="jobList"
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
            initialRoute={Router.getRoute('messages')}
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}

RootNavigation.propTypes = {
  profile: React.PropTypes.object,
};

