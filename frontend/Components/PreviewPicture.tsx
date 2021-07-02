import React from 'react';
import {
  SafeAreaView, ImageBackground, TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles/previewPictureStyles';

const Picture = ({
  picture,
  retakePicture,
}: {
  picture: any;
  retakePicture: any;
}) => {
  const history = useHistory();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: picture.uri }} style={styles.image}>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => retakePicture()}>
            <MaterialIcons name="photo-camera" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => history.push('/uploadPicture', { pictureToBeUploaded: picture.uri })}>
            <MaterialIcons name="check-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Picture;
