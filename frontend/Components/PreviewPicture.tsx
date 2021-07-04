import React, { useState } from 'react';
import {
  SafeAreaView, ImageBackground, TouchableOpacity, Modal, Alert, Pressable,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import UploadPicture from '../Screens/UploadPicture';
import styles from './styles/previewPictureStyles';

const Picture = ({
  picture,
  retakePicture,
} : {
  picture: any;
  retakePicture: any;
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: picture.uri }} style={styles.image}>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => retakePicture()}>
            <MaterialIcons name="photo-camera" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView>
          <Modal
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <ImageBackground source={{ uri: picture.uri }} style={styles.image}>
              <UploadPicture
                picture={picture.base64}
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
              />
            </ImageBackground>
          </Modal>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
          >
            <MaterialIcons name="check-circle-outline" size={24} color="black" />
          </Pressable>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Picture;
