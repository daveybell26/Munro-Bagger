import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navFooter: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#427AA1',
  },
  selectedFooterText: {
    marginTop: -4,
    color: 'white',
    fontSize: 10,
  },
  nonSelectedFooterText: {
    marginTop: -4,
    fontSize: 10,
  },
});

export default styles;
