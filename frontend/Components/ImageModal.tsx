import React from 'react';
import { Image, Modal, Pressable } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './styles/imageModalStyles';

const ImageModal = ({ modal, setModal }: { modal: any, setModal: any }) => (
  <Modal
    visible={!!modal.id}
    animationType="fade"
    transparent
  >
    <Pressable
      style={styles.pressable}
      onPress={() => setModal({})}
    >
      <BlurView
        intensity={100}
        tint="dark"
        style={styles.blur}
      >
        <Image
          source={{ uri: modal.imageUrl }}
          style={styles.image}
        />
      </BlurView>
    </Pressable>
  </Modal>
);

export default ImageModal;
