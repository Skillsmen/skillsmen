import React from 'react';
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import colors from '../../constants/Colors';
import BackButton from '../../reusableComponents/BackButton';


const CalendarPicker = require('react-native-calendar-picker');

const { width } = Dimensions.get('window');
class AddTimeFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };

    this.onDateChange = (date, key) => {
      console.log('DATE:', date);
      this.setState({ date });
      this.props.route.params.methods.addJobDetail(key, date);
    };
  }

  componentWillMount() {
    // A manual call to the onDateChange function in case the user doesn't trigger it
    // And just hits NEXT to navigate to the next page.
    const time = this.props.route.params.time;
    this.onDateChange(this.state.date, time);
  }

  render() {
    const styles = this.props.route.params.styles;
    const methods = this.props.route.params.methods;
    const time = this.props.route.params.time;
    const nextFrame = time === 'from' ? 'addTimeFrame' : 'addJobDetails';
    const timeParam = time === 'from' ? 'to' : null;
    const timeContext = time === 'from' ? 'START DATE' : 'END DATE';
    const text = moment(this.state.date).format('ddd, MMM Do');

    return (
      <View style={styles.container}>
        <BackButton navigator={methods.navigator} />
        <Text>{timeContext}: {text} </Text>
        <CalendarPicker
          selectedDate={this.state.date}
          onDateChange={date => this.onDateChange(date, time)}
          screenWidth={width}
          selectedBackgroundColor={'#5ce600'}
        />
        <View>
          <TouchableOpacity style={styles.bttn} onPress={() => methods.nextScene(nextFrame, { styles, methods, time: timeParam })}>
            <Text style={{ color: colors.primary }}> NEXT </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

AddTimeFrame.propTypes = {
  addTime: React.PropTypes.func,
  route: React.PropTypes.object,
};

export default AddTimeFrame;
