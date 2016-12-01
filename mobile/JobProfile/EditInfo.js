import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import Banner from '../reusableComponents/Banner/ModularBanner';
import ProfileCard from './components/ProfileCard/ProfileCard';

const { width, height } = Dimensions.get('window');
const iconArr = ['money', 'wrench', 'location-arrow', 'user'];
const styles = StyleSheet.create({
  banner: {
    flex: 2,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginLeft: 15,
  },
  icon: {
  },
  description: {
    flex: 2,
    justifyContent: 'flex-start',
    margin: 15,
    backgroundColor: 'transparent',
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
    backgroundColor: 'transparent',
  },
  container: {
    alignItems: 'stretch',
    height: height - 106, // 64 is the size of the tab bar, 16 is the go back button
    width,
  },
  contactPic: {
    borderRadius: width * 0.1 * 0.12,
    width: width * 0.1,
    height: width * 0.1,
    margin: 0.05 * height,
  },
  editTextBox: {
    height: 40,
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  time: {
    marginLeft: 15,
    backgroundColor: 'transparent',
  },
});

class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromModelVisable: false,
      toModalVisible: false,
    };

    this.setModalVisible = (visible, key) => {
      if (key === 'from') {
        this.setState({ fromModalVisible: visible });
      } else {
        this.setState({ toModalVisible: visible });
      }
    };
  }

  componentWillMount() {
    this.setState({ fromModalVisible: false, toModalVisible: false });
  }

  render() {
    const { propertyArr, title, description, User, start, end, updateJob } = this.props;
    const textChange = (key, val) => {
      const diff = {};
      diff[key] = val;
      updateJob(diff);
    };
    return (
      <View style={styles.container}>
        {/* job title here */}
        <TextInput
          style={styles.editTextBox}
          onChangeText={text => textChange('title', text)}
          defaultValue={title}
        />
        {/* banner : job type pay rate location time range vacancies */}
        <Banner
          iconArr={iconArr}
          propertyArr={propertyArr}
          iconSize={25}
          styles={styles.banner}
          iconStyles={{ flex: 1 }}
          editMode
          editModeKeys={['pay', 'profession', 'location', 'hires']}
          setUserInfoToUpdate={textChange}
          textBoxStyle={styles.editTextBox}
        />
        {/* time range */}
        <View>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.fromModalVisible}
          >
            <View style={{ marginTop: 22 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <CalendarPicker
                  selectedDate={new Date(start)}
                  onDateChange={date => textChange('from', date)}
                  screenWidth={Dimensions.get('window').width}
                  selectedBackgroundColor={'#5ce600'}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.fromModalVisible, 'from');
                  }}
                >
                  <Text> OK </Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>
        </View>
        <View>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.toModalVisible}
          >
            <View style={{ marginTop: 22 }}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <CalendarPicker
                  selectedDate={new Date(end)}
                  onDateChange={date => textChange('to', date)}
                  screenWidth={Dimensions.get('window').width}
                  selectedBackgroundColor={'#5ce600'}
                />

                <TouchableOpacity
                  onPress={() => {
                    this.setModalVisible(!this.state.toModalVisible, 'to');
                  }}
                >
                  <Text> OK </Text>
                </TouchableOpacity>

              </View>
            </View>
          </Modal>
        </View>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true, 'from');
          }}
        >
          <Text style={styles.time}>
            {moment(new Date(start.toString())).format('ddd, MMM Do')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true, 'to');
          }}
        >
          <Text style={styles.time}>
            {moment(new Date(end.toString())).format('ddd, MMM Do')}
          </Text>
        </TouchableOpacity>
        {/* job description here */}
        <Text style={styles.title}>
          {'The Job'}
        </Text>
        <TextInput
          style={[styles.editTextBox, { flex: 1 }]}
          onChangeText={text => textChange('description', text)}
          defaultValue={description}
          multiline
        />
      </View>
    );
  }
}

EditInfo.propTypes = {
  userInfoToUpdate: React.PropTypes.object,
  setUserInfoToUpdate: React.PropTypes.func,
};

export default EditInfo;

