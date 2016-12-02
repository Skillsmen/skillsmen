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
import settings from '../settings';
import Actions from '../actions/index';
import JobTile from '../components/JobTile';
import Router from '../navigation/Router';

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
    this.goToJob = this.goToJob.bind(this);
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
        profession: this.state.userInfoToUpdate.profession,
        location: this.state.userInfoToUpdate.location,
        experience: this.state.userInfoToUpdate.experience,
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
            profession: this.state.userInfoToUpdate.profession,
            location: this.state.userInfoToUpdate.location,
            experience: this.state.userInfoToUpdate.experience,
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

  goToJob(jobId, isOwner = false) {
    const params = {
      jobId,
      isOwner,
    };
    this.props.navigator.push(Router.getRoute('jobProfile', params));
  }

  render() {
    console.log('from profile isPeer', this.props.route.params.peerProfile);
    const userInfo = this.props.route.params.user || this.props.profile;
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
          <View style={styles.info}>
            {this.state.editMode &&
              <EditInfo
                setUserInfoToUpdate={this.setUserInfoToUpdate}
                userInfoToUpdate={this.state.userInfoToUpdate}
              />
            }
            {!this.state.editMode &&
              <MainInfo
                userInfo={userInfo}
                ownInfo={this.props.profile}
                peer={this.isPeer()}
                goToChat={this.props.goToChat}
                navigator={this.props.navigator}
              />
            }
            <ScrollableTabView
              tabBarActiveTextColor="#395b91"
              tabBarUnderlineStyle={{ backgroundColor: '#395b91' }}
            >
              <RecommendationList
                userInfo={userInfo}
                isPeer={this.isPeer()}
                navigator={this.props.navigator}
                name={userInfo.name}
                reviews={userInfo.Reviews}
                currentLoggedInUser={this.props.profile}
                tabLabel="Recommendations"
              />
              { !this.isPeer() &&
                <View tabLabel="Your Jobs">
                  {this.props.yourJobs.map((job, i) => {
                    return (<JobTile
                      job={job}
                      key={i}
                      pressJob={() => { this.goToJob(job.id, true); }}
                    />);
                  })}
                </View>
              }
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
  dispatch: React.PropTypes.func,
  goToChat: React.PropTypes.func,
  yourJobs: React.PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    profile: state.profile,
    yourJobs: state.jobList.jobList.filter(job => job.UserId === state.profile.id),
  };
};

// goToChat might only be useful when there is already a chat b/t users
const mapDispatchToProps = dispatch => ({
  goToChat: (chatId, chatPeer, messageList) => {
    dispatch(Actions.goToChat(chatId, chatPeer, messageList));
  },
});

const ProfileConnected = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileConnected;
