import React from 'react';

import {
  View,
  Text,
  Image,
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
      nameText: 'Tim da Toolman',
      experienceText: 'This is all of my experience. I have got lots of experience. Hire me because of me and this and that and boom.',
      contactInfo: '(234)567-8910',
    };
    this.clickOnEdit = this.clickOnEdit.bind(this);

    // Populate arrays to send into 'ModularBanner' component which creates icons next to descriptions
    this.icons = ['wrench', 'globe', 'clock-o'];
    this.descriptions = ['handyman', 'Earth', '385 years'];
  }

  // Toggles edit mode for rendering text boxes or regular info
  clickOnEdit() {
    this.setState({
      editMode: !this.state.editMode,
    });
  }
  renderHeader() {
    if (!this.props.route.params.peerProfile) {
      return (<Header noEdit={false} clickOnEdit={this.clickOnEdit} editMode={this.state.editMode} />);
    }
    return (<Header noEdit={true} />);
  }

  render() {
    const userInfo = this.props.route.params.user;
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <ScrollView contentContainerStyle={styles.contentContainer} alwaysBounceVertical>
            <ModularBanner
              iconArr={this.icons}
              propertyArr={[userInfo.expertise, userInfo.location, userInfo.experience_years]}
              styles={styles.banner}
            />
          <View style={styles.info}>
            {/* TODO- make below banner editable on edit icon click */}
            {this.state.editMode &&
              <EditInfo />
            }
            {!this.state.editMode &&
              <MainInfo
                name={userInfo.first_name.concat(' '.concat(userInfo.last_name))}
                experience={userInfo.description}
                contactInfo={userInfo.mobile}
              />
            }
            <RecommendationList width={width} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;