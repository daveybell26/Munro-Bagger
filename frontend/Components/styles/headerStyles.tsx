import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#427AA1',
  },
  appName: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logout: {
    position: 'absolute',
    right: 15,
  },
});
export default styles;
