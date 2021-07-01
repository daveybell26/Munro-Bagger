import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, Dimensions,
} from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

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
    height: Dimensions.get('screen').height * 0.08,
    width: Dimensions.get('screen').width * 0.2,
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
    height: Dimensions.get('screen').height * 0.08,
    width: Dimensions.get('screen').width * 0.2,
    position: 'absolute',
    bottom: '3%',
    right: '40%',
  },

});

const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.takePictureButton}>
          <MaterialIcons name="photo-camera" size={24} color="black" />
        </View>
        <View style={styles.switchCameraButton}>
          <MaterialIcons
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
            name="flip-camera-ios"
            size={24}
            color="black"
          />
        </View>

      </Camera>
    </View>
  );
};

export default CameraScreen;
