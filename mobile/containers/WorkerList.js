// import React from 'react';
// import {
//   View,
//   ScrollView,
// } from 'react-native';
// import RowEntry from './RowEntry';
// import styles from '../../workerListStyles';

// import React from 'react';
// import {
//   Text,
// } from 'react-native';
import { connect } from 'react-redux';
import Router from '../navigation/Router';
import TradesmanList from '../components/TradesmanList';
import Actions from '../actions/index';

const mapStateToProps = (state) => {
  return {
    users: state.workerList.workers,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  goToWorker: (profileObj) => {
    const params = {
      peerProfile: true,
      user: profileObj,
    };
    ownProps.navigator.push(Router.getRoute('profile', params));
  },
  updateWorkers: () => {
    dispatch(Actions.updateWorkerList());
  },
});

const WorkerList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TradesmanList);

export default WorkerList;
