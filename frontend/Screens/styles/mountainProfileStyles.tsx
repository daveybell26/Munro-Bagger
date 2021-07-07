import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  infoContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 25,
    paddingHorizontal: 50,
  },
  info: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  infoItem: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  lineBreaks: {
    borderBottomWidth: 1,
    marginHorizontal: 25,
    marginVertical: 10,
  },
  mountainName: {
    fontFamily: 'NunitoBlack',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 5,
  },
  mountainHeight: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default styles;
