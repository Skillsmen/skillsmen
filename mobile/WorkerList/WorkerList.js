import React from 'react';
import axios from 'axios';
import {
  Text,
  View,
} from 'react-native';
import RowList from './components/tradieList/TradieList';
import SearchBar from '../JobList/searchBar';
import JobTypeFilter from '../JobList/jobTypeFilter';

class WorkerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: false,
    };
  }

  componentWillMount() {
    this.getUsers();
  }

  getUsers() {
    const context = this;
    axios.get('http://127.0.0.1:3000/user/')
      .then((response) => {
        context.setState({
          response: response.data,
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
          setOfTradies={this.state.response}
          navigator={this.props.navigator}
        />
      </View>
    );
  }
}

export default WorkerList;
