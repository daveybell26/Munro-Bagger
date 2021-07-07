import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  horizontalList: {
    flex: 0,
    marginVertical: 10,
  },
  unclimbedMountainNames: {
    color: 'black',
    textAlign: 'center',
    marginTop: 5,
  },
  view: {
    margin: 10,
    alignItems: 'flex-end',
    width: 100,
  },
  randomMountainNames: {
    position: 'absolute',
    bottom: 8,
    right: 16,
    color: '#EBF2FA',
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: { height: 1, width: 1 },
  },
  lineBreaks: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 15,
  },
  randomMountainHeader: {
    fontFamily: 'NunitoBlack',
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15,
  },
});

export default styles;
