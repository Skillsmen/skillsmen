import React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  TextInput
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import styles from '../styles/WorkerList';
import Tradesman from './Tradesman';
import JobTypeFilter from './JobTypeFilter'

const blueImg = require('../assets/bluePatternBackground.png');

const { width, height } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const searchStyles = StyleSheet.create({
  bluePattern: {
    height: 10 * vh,
    width,
  },
  searchBar: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    fontWeight: '100',
    height: 4 * vh,
    fontSize: 15,
    marginTop: 4 * vh,
    width: 80 * vw,
    color: 'white',
    paddingLeft: 3 * vw,
  },
  hideSearchIcon: {
    color: '#ffffff',
  },
  jobTypeBar: {
    height: 7 * vh,
    backgroundColor: 'white',
    width: 100 * vw,
  },
  jobTypeText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  searchIcon: {
    paddingTop: 0.4 * vh,
  },
});

class TradesmanList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  componentDidMount() {
    const { updateWorkers } = this.props;
    updateWorkers();
  }

  hideSearchIcon(text) {
    this.setState({ searchText: text });
    this.props.userFilter(text)
  }

  render() {
    const { users, goToWorker, userFilter } = this.props;
    const rightButton = this.props.rightButton;
    return (
      <View >
          <Image
            style={searchStyles.bluePattern}
            source={blueImg}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TextInput
              style={searchStyles.searchBar}
              placeholder="     Search by name, location, profession"
              placeholderTextColor="white"
              onChangeText={
                (text) => this.hideSearchIcon(text)
              }
              value={this.state.searchText}
            >
              {this.state.searchText.length > 0 ? null : <FontAwesome name={'search'} size={18} style={searchStyles.searchIcon} color={'#ffffff'} />}
            </TextInput>
              {rightButton}
            </View>
          </Image>
          <JobTypeFilter text={"Tradesman"}/>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical
        >
          {users.map((user, i) => {
            let background;
            if (i % 2 === 0) {
              background = 'transparent';
            } else {
              background = '#F0F0F0';
            }
            return (
              <Tradesman
                background={background}
                key={user.name}
                userInfo={user}
                pressUser={() => { goToWorker(user); }}
              />
            )
          })}
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
