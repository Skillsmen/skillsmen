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
import settings from '../settings';

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
        axios.put(`${settings.SERVER}/job/${job.id}`, {
          pay: job.pay,
          title: job.title,
          profession: job.profession,
          address: job.address,
          hires: job.hires,
          to: job.to,
          from: job.from,
        })
        .then(() => {
          console.log('Success updating job!');
        })
        .catch(err => console.log('Error editing jobs', err.message));
      }
      this.setState({
        editMode: !this.state.editMode,
      });
    };
    const { updateJob, job } = this.props;
    this.updateJobBinded = updateJob.bind(null, job.id);

    this.showEditBar = (navigator, editMode) => {
      return (
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width, height: 40 }}>
          <BackButton navigator={navigator} />
          {this.props.route.params.isOwner &&
          <TouchableHighlight
            style={{
              marginRight: 10,
              marginTop: 20,
            }}
            onPress={this.clickOnEdit}
          >
            <FontAwesome
              style={styles.editIcon}
              name="pencil-square-o"
              size={36}
              color={editMode ? '#7dc4ff' : '#3A3A3A'}
            />
          </TouchableHighlight>
          }
        </View>
      );
    };
  }
  render() {
    const { navigator, job } = this.props;
    const payrate = job.pay.toString();
    const propertyArr = [
      payrate,
      job.profession,
      job.address,
      job.hires.toString(),
    ];

    // if (job.vacancies > 1) { iconArr[4] = 'users'; }
    return (
      <Image
        style={[styles.backgroundImage, styles.container]}
        source={bgImg}
      >
        {this.showEditBar(navigator, this.state.editMode)}
        <View style={{ marginTop: 15 }}>
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
              start={new Date(job.from).toString()}
              end={new Date(job.to).toString()}
              updateJob={this.updateJobBinded}
            />
          }
        </View>
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
