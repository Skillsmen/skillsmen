import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height - 64,
    justifyContent: 'space-between',
  },
  contentContainer: {
    justifyContent: 'flex-start',
  },
  bluePattern: {
    height: 0.1 * height,
    width,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    width,
  },
  headerMid: {
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    width: width * 0.6,
    marginLeft: 0.32 * width,
  },
  placeHolder: {
    width: width * 0.3,
  },
  headerName: {
    fontSize: 16,
    backgroundColor: 'transparent',
    color: 'white',
  },
  headerText: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'transparent',
  },
  sendRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
    width,
    borderColor: 'gray',
    borderWidth: 1,
  },
  inputText: {
    width: width * 0.85,
    height: 30,
    borderColor: '#092a4c',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 4,
    marginTop: 3,
    fontSize: 14,
  },
  peerMessage: {
    color: '#dadee8',
    fontSize: 14,
  },
  ownMessage: {
    color: '#092a4c',
    fontSize: 14,
  },
  message: {
    width: 0.85 * width,
    marginTop: 10,
    padding: 3,
    borderRadius: 10,
  },
  ownContainer: {
    backgroundColor: '#dadee8',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  peerContainer: {
    backgroundColor: '#092a4c',
    alignSelf: 'flex-end',
    marginRight: 5,
  },
  peerMsgImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
