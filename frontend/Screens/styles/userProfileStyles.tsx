import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  userProfileContainer: {
    flex: 0,
    flexDirection: 'column',
    marginHorizontal: 25,
    marginTop: 20,
  },
  userProfileHeroSection: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontFamily: 'NunitoRegular',
    fontSize: 27.5,
    marginVertical: 10,
  },
  userStatsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 25,
  },
  lineBreaks: {
    borderBottomWidth: 1,
    marginHorizontal: 25,
  },
  progressBar: {
    width: 210,
    height: 30,
    backgroundColor: '#E02A56',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressText: {
    position: 'absolute',
    top: '25%',
    right: 5,
    color: 'white',
  },
});

export default styles;
