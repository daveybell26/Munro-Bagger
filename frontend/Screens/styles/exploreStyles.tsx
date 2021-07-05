import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  title: {
    flex: 0,
    marginTop: '5%',
    marginBottom: '2%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pictureTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  horizontalList: {
    height: '40%',
  },
  unclimbedMountainNames: {
    color: 'black',
    textAlign: 'center',
    width: 100,
    justifyContent: 'space-around',

  },
  view: {
    margin: 10,
    alignItems: 'flex-end',
    width: 100,
  },
});

export default styles;
