import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
  iconText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
  leftIcon: {
    marginLeft: 15 * vw,
    width: 20 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  iconSection: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 3 * vh,
    width: 100 * vw,
  },
  middleIcon: {
    width: 30 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: 2 * vw,
  },
  rightIcon: {
    width: 25 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  middleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 12,
  },
  row: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 150,
    justifyContent: 'center',
  },
  leftRow: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  rowUserPic: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  rightRow: {
    flexDirection: 'row',
    flex: 4,
  },
  banner: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    alignItems: 'center',
  },
  tripleBanner: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 5,
  },
  activeTitle: {
    color: 'red',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
  circularImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});

export default styles;
