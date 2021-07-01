import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: Dimensions.get('window').height,
  },
  switchCameraButton: {
    backgroundColor: '#FFFFFE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.15,
    position: 'absolute',
    bottom: '2%',
    left: '2%',
  },
  takePictureButton: {
    backgroundColor: '#FFFFFE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.15,
    position: 'absolute',
    bottom: '3%',
    right: '42.5%',
  },
  backButton: {
    backgroundColor: '#FFFFFE',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 35,
    height: Dimensions.get('screen').height * 0.06,
    width: Dimensions.get('screen').width * 0.15,
    position: 'absolute',
    bottom: '3%',
    right: '2%',
  },

});

export default styles;
