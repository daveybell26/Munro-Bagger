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
  userProfileHeroSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
    padding: 20,
  },
  userStatsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  userMunroePics: {
  },
  lineBreaks: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
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
