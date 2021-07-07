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
    height: '50%',
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
  randomMountainImageContainer: {
    position: 'relative',
    marginBottom: 30,
  },
  randomMountainNames: {
    position: 'absolute',
    bottom: 8,
    right: 16,
    color: '#EBF2FA',
    textShadowColor: 'black',
    textShadowRadius: 2,
  },
  lineBreaks: {
    borderBottomWidth: 1,
    // marginLeft: 20,
    // marginRight: 20,
    margin: 15,
  },
  randomMountainHeader: {
    fontFamily: 'NunitoBlack',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 17,
  },

});

export default styles;
