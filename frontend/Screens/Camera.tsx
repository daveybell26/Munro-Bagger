import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';
import styles from './styles/camera';

const CameraScreen = () => {
  const history = useHistory();
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
      <Camera style={styles.camera} type={type} ratio="16:9">
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
        <View style={styles.backButton}>
          <MaterialIcons onPress={() => history.push('/profile')} name="arrow-back-ios" size={24} color="black" />
        </View>

      </Camera>
    </View>
  );
};

export default CameraScreen;
