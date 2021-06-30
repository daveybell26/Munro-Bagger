import React from 'react';
import {
  Image, Modal, Pressable,
} from 'react-native';
import { BlurView } from 'expo-blur';

const ImageModal = ({ modal, setModal }: { modal: any, setModal: any }) => (
  <Modal visible={!!modal.id} animationType="fade" transparent>
    <Pressable
      style={{
        flex: 1, alignItems: 'center', justifyContent: 'center',
      }}
      onPress={() => { setModal({}); }}
    >
      <BlurView
        intensity={100}
        tint="dark"
        style={{
          flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%',
        }}
      >
        <Image
          source={{ uri: modal.imageUrl }}
          style={{
            width: 300, height: 300, borderRadius: 10,
          }}
        />
      </BlurView>
    </Pressable>
  </Modal>
);

export default ImageModal;
