import React from 'react';
import axios from 'axios';

import {
  Text,
  View,
} from 'react-native';
import RowList from './components/tradieList/TradieList';
import mock from '../MOCK_USER_DATA';
import SearchBar from '../JobList/searchBar';
import JobTypeFilter from '../JobList/jobTypeFilter';

class WorkerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
    };
    // this.getUsers.bind(this);
  }

  componentWillMount() {
    this.getUsers();
  }

  // Current problem is that request goes through and gets logged but there is still something
  // that is tripping an error. The state is not getting reset
  // and the component won't get rerendered...

  getUsers() {
    const context = this;
    axios.get('http://127.0.0.1:3000/user/')
      .then((response) => {
        context.setState({
          response,
        });
      })
      .catch((error) => {
        console.log('error in getUsers catch', error);
      });
  }

  render() {
    if (!this.state.response) {
      return (
        <Text> Loading </Text>
      );
    }

    return (
      <View>
        <View>
          <SearchBar />
          <JobTypeFilter />
        </View>
        <RowList
          setOfTradies={mock}
          navigator={this.props.navigator}
        />
      </View>
    );
  }
}

export default WorkerList;
