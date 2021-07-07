/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, View, Text, TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { MaterialIcons } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';
import styles from './styles/cameraStyles';
import Picture from '../Components/PreviewPicture';

const CameraScreen = () => {
  const history = useHistory();
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const options = {
    quality: 0,
    base64: true,
  };

  let camera: Camera | null;

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (camera) {
      try {
        const picture = await camera.takePictureAsync(options);
        setPreviewVisible(true);
        setCapturedImage(picture);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Unable to take picture', error);
      }
    }
  };

  const retakePicture = () => {
    setCapturedImage({});
    setPreviewVisible(false);
  };

  const imagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({ base64: true });

    if (pickerResult.cancelled === true) {
      return;
    }

    setCapturedImage(pickerResult);
    setPreviewVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {previewVisible && capturedImage ? (
        <Picture picture={capturedImage} retakePicture={retakePicture} />
      ) : (
        <Camera
          ref={(reference) => {
            camera = reference;
          }}
          style={styles.camera}
          type={type}
          ratio="16:9"
        >
          <TouchableOpacity
            style={styles.button}
            onPress={imagePicker}
          >
            <MaterialIcons name="folder" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back,
              );
            }}
          >
            <MaterialIcons
              name="flip-camera-ios"
              size={24}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={takePicture}
          >
            <MaterialIcons name="photo-camera" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => history.push('/profile')}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

        </Camera>
      )}
    </SafeAreaView>
  );
};

export default CameraScreen;
