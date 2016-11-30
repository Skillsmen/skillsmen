/* eslint-env browser*/
import React from 'react';
import Exponent from 'exponent';
import {
  View,
  StyleSheet,
} from 'react-native';
import {
  StackNavigation,
  withNavigation,
} from '@exponent/ex-navigation';
import { connect } from 'react-redux';
import axios from 'axios';
import Router from '../navigation/Router';
import Actions from '../actions/index';
import settings from '../settings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsReady: false,
      dataReady: false,
    };

    this.fetchServerData = async () => {
      const { dispatch } = this.props;
      try {
        console.log('Fetching data from server . . .');
        const workerRes = await axios.get(`${settings.SERVER}/user/`);
        const jobRes = await axios.get(`${settings.SERVER}/job/`);
        dispatch(Actions.setWorkerList(workerRes.data));
        dispatch(Actions.setJobList(jobRes.data, new Date()));
      } catch (e) {
        console.log('Could not get workers/jobs on load!', e.message);
      }
      // dispatch(Actions.getToken());
      console.log('Setting State');
      this.setState({
        dataReady: true,
      });
    };

    this.fetchAssets = async () => {
      // Get fonts loaded
      this.setState({
        assetsReady: true,
      });
    };
  }

  async componentDidMount() {
    await this.fetchServerData();
    await this.fetchAssets();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.assetsReady || !this.state.dataReady) {
      return;
    }

    const rootNavigator = this.props.navigation.getNavigator('root');
    const previouslySignedIn = !!prevProps.token &&
          (prevState.dataReady === this.state.dataReady) &&
          (prevState.assetsReady === this.state.assetsReady);
    const currentlySignedIn = !!this.props.token;

    // If not previously signed in, and just got the token, move to main app
    // Case: Signing In -  you clicked the signin button on the Entry screen - which
    // triggers a dispatch to change the state store values token.
    // Since this component is mapped to that part of the state, it will
    // trigger a rerender event.
    if (!previouslySignedIn && currentlySignedIn) {
      rootNavigator.replace('navigationBar');

    // If somehow you were looking at main app content
    // Case: Signin Out
    } else if (previouslySignedIn && !currentlySignedIn) {
      rootNavigator.replace('entry');
    }
    // Do nothing here.
  }

  render() {
    if (!this.state.assetsReady || !this.state.dataReady) {
      return <Exponent.Components.AppLoading />;
    }
    return (
      <View style={styles.container}>
        <StackNavigation
          id="root"
          initialRoute={Router.getRoute('entry')}
        />
      </View>
    );
  }
}

App.propTypes = {
  navigation: React.PropTypes.object,
  token: React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const props = {
    token: state.app.token,
  };
  return props;
};

const AppConnected = connect(
  mapStateToProps,
)(App);


export default withNavigation(AppConnected);
