import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const vh = height / 100;
const vw = width / 100;

const styles = StyleSheet.create({
  posterImageIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#f5f5f5',
    borderWidth: 1.5,
  },
  iconText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
  leftIcon: {
    width: 27 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  iconSection: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  middleIcon: {
    width: 32 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
    paddingLeft: 2 * vw,
  },
  rightIcon: {
    width: 7 * vw,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  row: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tileRight: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: 7,
    paddingBottom: 7,
    marginLeft: 5,
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
