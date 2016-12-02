import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff',
  },
  bluePattern: {
    height: 0.1 * height,
    width,
  },
  tileRight: {
    alignItems: 'flex-start',
    width: 0.70 * width,
    marginLeft: 10,
    marginRight: 10,
  },
  tileMessage: {
    fontWeight: '300',
    fontSize: 10,
    marginTop: 5,
    color: '#242424',
  },
  tileDate: {
    fontWeight: '200',
    fontSize: 10,
    fontStyle: 'italic',
    color: '#242424',
  },
  row: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: '300',
    fontSize: 26,
    marginTop: 5,
    alignSelf: 'center',
  },
  circularImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 10,
  },
});

export default styles;
