import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    marginTop: '20%',
  },
  button: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    height: 50,
    width: 50,
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    flexDirection: 'row',
  },
});

export default styles;
