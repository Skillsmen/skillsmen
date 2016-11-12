import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 75,
  },
  leftRow: {
    flexDirection: 'row',
    flex: 1,
  },
  rightRow: {
    flexDirection: 'row',
    flex: 4,
  },
  banner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  tripleBanner: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginLeft: 35,
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
});

export default styles;
