import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {
  FontAwesome,
} from '@exponent/vector-icons';
import Header from './Header';
import MainInfo from './MainInfo';
import EditInfo from './EditMode';
import RecommendationList from './RecommendationList';
import ModularBanner from '../reusableComponents/Banner/ModularBanner';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
  },
  info: {
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  banner: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 10,
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);

    // The state is populated with profile information. It will change on edit.
    // Eventually there may need to be a submit button to trigger a PUT request to DB
    this.state = {
      editMode: false,
      userInfo: {},
    };
    this.clickOnEdit = this.clickOnEdit.bind(this);
    this.isPeer = this.isPeer.bind(this);
    this.setUserInfo = this.setUserInfo.bind(this);
   // Populate arrays to send into 'ModularBanner' component which creates icons next to descriptions
    this.icons = ['wrench', 'globe', 'clock-o'];
    this.descriptions = ['handyman', 'Earth', '385 years'];
  }

  // Toggles edit mode for rendering text boxes or regular info

  setUserInfo(userInfoProperty, userInfoInput) {
    const userInfo = this.state.userInfo;
    userInfo[userInfoProperty] = userInfoInput;
    this.setState({
      userInfo,
    });
  }
  isPeer() {
    return this.props.route.params.peerProfile;
  }
  clickOnEdit() {
    this.setState({
      editMode: !this.state.editMode,
    });
  }

  render() {
    const userInfo = this.props.route.params.user || this.props.profile;
    return (
      <View style={styles.container}>
        <Header
          peer={this.isPeer()}
          clickOnEdit={this.clickOnEdit}
          editMode={this.state.editMode}
          navigator={this.props.navigator}
        />
        <ScrollView contentContainerStyle={styles.contentContainer} alwaysBounceVertical>
            <ModularBanner
              iconArr={this.icons}
              propertyArr={[userInfo.profession, userInfo.location, `${userInfo.experience} years`]}
              styles={styles.banner}
            />
          <View style={styles.info}>
            {/* TODO- make below banner editable on edit icon click */}
            {this.state.editMode &&
              <EditInfo setUserInfo={this.setUserInfo}/>
            }
            {!this.state.editMode &&
              <MainInfo
                name={userInfo.name}
                experience={userInfo.description}
                contactInfo={userInfo.mobile}
              />
            }
            <RecommendationList 
              userInfo={userInfo}
              isPeer={this.isPeer()} 
              navigator={this.props.navigator}
              name={userInfo.name}
             />
          </View>
        </ScrollView>
      </View>
    );
  }
}

Profile.propTypes = {
  profile: React.PropTypes.object,
  navigator: React.PropTypes.object,
  route: React.PropTypes.object,
};


const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const ProfileConnected = connect(mapStateToProps)(Profile);

export default ProfileConnected;
