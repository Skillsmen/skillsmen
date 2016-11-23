import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import styles from '../styles/WorkerList';
import Tradesman from './Tradesman';

class TradesmanList extends React.Component {
  componentDidMount() {
    const { updateWorkers } = this.props;
    updateWorkers();
  }

  render() {
    const { users, goToWorker } = this.props;
    return (
      <View >
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          {users.map(user =>
            (<Tradesman
              key={user.name}
              userInfo={user}
              pressUser={() => { goToWorker(user); }}
            />))}
        </ScrollView>
      </View>
    );
  }
}

TradesmanList.propTypes = {
  updateWorkers: React.PropTypes.func.isRequired,
  users: React.PropTypes.array.isRequired,
  goToWorker: React.PropTypes.func.isRequired,
};

export default TradesmanList;
