import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0,
  },
  info: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  routeButton: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
