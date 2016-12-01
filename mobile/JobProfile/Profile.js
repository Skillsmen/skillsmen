import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  Navigator,
  TouchableHighlight,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import axios from 'axios';
import BackButton from '../reusableComponents/BackButton';
import MainInfo from './MainInfo';
import EditInfo from './EditInfo';
import Actions from '../actions/index';

const bgImg = require('../assets/whiteTexturedBackground.png');

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    height,
    width,
    paddingBottom: Navigator.NavigationBar.Styles.General.NavBarHeight,
  },
  backgroundImage: {
    resizeMode: 'cover',
    alignItems: 'center',
    width,
  },
  contactPic: {
    borderRadius: width * 0.1 * 0.12,
    width: width * 0.1,
    height: width * 0.1,
    margin: 0.05 * height,
  },
  contact: {
    color: '#006600',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  topTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
    backgroundColor: 'transparent',
  },
  banner: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 15,
  },
  description: {
    flex: 2,
    justifyContent: 'flex-start',
    margin: 15,
    backgroundColor: 'transparent',
  },
  editIcon: {
    backgroundColor: 'transparent',
    // marginTop: 0.03 * height,
    // marginRight: 5,
    // alignSelf: 'flex-end',
  },
});


/* Job Profile */
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };

    this.clickOnEdit = () => {
      if (this.state.editMode) {
        const { job } = this.props;
        console.log('Pushing up to the server!');
        console.log(job);
      }
      this.setState({
        editMode: !this.state.editMode,
      });
    };
    const { updateJob, job } = this.props;
    this.updateJobBinded = updateJob.bind(null, job.id);

    this.showEditBar = (navigator, editMode) => {
      const editBtn = (
        <TouchableHighlight onPress={this.clickOnEdit}>
          <FontAwesome
            style={styles.editIcon}
            name="pencil-square-o"
            size={42}
            color={editMode ? '#7dc4ff' : '#DCDCDC'}
          />
        </TouchableHighlight>
      );
      if (this.props.route.params.isOwner) {
        return (
          <BackButton navigator={navigator} rightComponent={editBtn} />
        );
      }
      return (<BackButton navigator={navigator} />);
    };
  }
  render() {
    const { navigator, job } = this.props;
    const payrate = job.pay.toString();
    const propertyArr = [
      payrate,
      job.profession,
      job.address,
      job.hires,
    ];

    // if (job.vacancies > 1) { iconArr[4] = 'users'; }
    return (
      <Image
        style={[styles.backgroundImage, styles.container]}
        source={bgImg}
      >
        {this.showEditBar(navigator, this.state.editMode)}
        {!this.state.editMode &&
          <MainInfo
            propertyArr={propertyArr}
            title={job.title}
            description={job.description}
            User={job.User}
            start={job.from}
            end={job.to}
          />
        }
        {this.state.editMode &&
          <EditInfo
            propertyArr={propertyArr}
            title={job.title}
            description={job.description}
            User={job.User}
            start={job.from}
            end={job.to}
            updateJob={this.updateJobBinded}
          />
        }
      </Image>
    );
  }
}

Profile.propTypes = {
  route: React.PropTypes.object,
  navigator: React.PropTypes.object,
  job: React.PropTypes.object,
  updateJob: React.PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  return {
    job: state.jobList.jobList.filter(job => job.id === ownProps.route.params.jobId)[0],
  };
};

const mapDispatchToProps = dispatch => ({
  updateJob: (id, diff) => {
    dispatch(Actions.updateJob(id, diff));
  },
});

const ProfileConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);

export default ProfileConnected;
