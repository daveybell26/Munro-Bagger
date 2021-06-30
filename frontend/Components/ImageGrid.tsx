import React, { useState } from 'react';
import {
  FlatList, Image, Modal, Pressable, SafeAreaView,
} from 'react-native';
import { BlurView } from 'expo-blur';

const ImageGrid = ({ list }: { list:any }) => {
  const [modal, setModal] = useState({});

  const singleImage = (item: any) => (
    <Pressable onPress={() => setModal(item)}>
      <Image
        style={{
          width: 100, height: 100, margin: 10, borderRadius: 10,
        }}
        source={{ uri: item.imageUrl }}
      />
    </Pressable>
  );

  const isVisable = !!modal.id;

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Modal visible={isVisable} animationType="fade" transparent>
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
      <FlatList
        data={list}
        renderItem={({ item }) => singleImage(item)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        style={{ marginTop: 10, marginBottom: 50 }}
      />
    </SafeAreaView>
  );
};

export default ImageGrid;
