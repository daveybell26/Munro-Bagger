import React from 'react';
import {
  Image, Modal, Pressable,
  StyleSheet,
} from 'react-native';
import { BlurView } from 'expo-blur';

const styles = StyleSheet.create({
  blur: {
    flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%',
  },
  image: {
    width: 300, height: 300, borderRadius: 10,
  },
  pressable: {
    flex: 1, alignItems: 'center', justifyContent: 'center',
  },
});

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
