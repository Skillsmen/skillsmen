import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Header from './Header';
import MainInfo from './MainInfo';
import EditInfo from './EditMode';
import RecommendationList from './RecommendationList';
import ModularBanner from '../reusableComponents/Banner/ModularBanner';
import settings from '../settings';

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
      userInfoToUpdate: this.props.profile,
    };
    this.clickOnEdit = this.clickOnEdit.bind(this);
    this.isPeer = this.isPeer.bind(this);
    this.setUserInfoToUpdate = this.setUserInfoToUpdate.bind(this);
    // Populate arrays to send into 'ModularBanner' component deleting icons next to descriptions
    this.icons = ['wrench', 'globe', 'clock-o'];
  }

  // Toggles edit mode for rendering text boxes or regular info

  setUserInfoToUpdate(userInfoProperty, userInfoInput) {
    const userInfoToUpdate = this.state.userInfoToUpdate;
    userInfoToUpdate[userInfoProperty] = userInfoInput;
    this.setState({
      userInfoToUpdate,
    });
  }
  isPeer() {
    return this.props.route.params.peerProfile;
  }
  clickOnEdit() {
    if (this.state.editMode) {
      axios.put(`${settings.SERVER}/user/${this.props.profile.id}`, {
        name: this.state.userInfoToUpdate.name,
        description: this.state.userInfoToUpdate.description,
        mobile: this.state.userInfoToUpdate.mobile,
        profilePicUrl: this.state.userInfoToUpdate.profilePicUrl,
      })
      .then((results) => {
        // TODO: Inside of here, need to send a dispatch to update store w/ new profile info
        // Also, make it so location, experience, profession are editable
        const { dispatch } = this.props;
        dispatch({
          type: 'UPDATE_PROFILE',
          diff: {
            name: this.state.userInfoToUpdate.name,
            description: this.state.userInfoToUpdate.description,
            mobile: this.state.userInfoToUpdate.mobile,
            profilePicUrl: this.state.userInfoToUpdate.profilePicUrl,
          },
        });
      })
      .catch(err => console.log('PUT error', err));
    }
    this.setState({
      editMode: !this.state.editMode,
      userInfoToUpdate: this.state.userInfoToUpdate,
    });
  }

  render() {
    const userInfo = this.props.route.params.user || this.props.profile;
    console.log('UserInfo - Jobs:', userInfo.Jobs);
    return (
      <View style={styles.container}>
        <Header
          peer={this.isPeer()}
          clickOnEdit={this.clickOnEdit}
          editMode={this.state.editMode}
          navigator={this.props.navigator}
          userInfoToUpdate={this.state.userInfoToUpdate}
          setUserInfoToUpdate={this.setUserInfoToUpdate}
          userInfo={userInfo}
          userPic={userInfo.profilePicUrl}
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
              <EditInfo
                setUserInfoToUpdate={this.setUserInfoToUpdate}
                userInfoToUpdate={this.state.userInfoToUpdate}
              />
            }
            {!this.state.editMode &&
              <MainInfo
                name={userInfo.name}
                experience={userInfo.description}
                contactInfo={userInfo.mobile}
              />
            }
            <ScrollableTabView>
              <RecommendationList
                userInfo={userInfo}
                isPeer={this.isPeer()}
                navigator={this.props.navigator}
                name={userInfo.name}
                reviews={userInfo.Reviews}
                currentLoggedInUser={this.props.profile}
                tabLabel="Recommendations"
              />
            </ScrollableTabView>
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
  dispatch: React.PropTypes.func.isRequired,
};


const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  };
};

const ProfileConnected = connect(mapStateToProps)(Profile);

export default ProfileConnected;
