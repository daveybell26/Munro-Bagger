import React, { useState } from 'react';
import {
  FlatList, Image, Pressable, SafeAreaView,
} from 'react-native';
import ImageModal from './ImageModal';

const ImageGrid = ({ list }: { list: any }) => {
  const [modal, setModal] = useState<any>({});

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

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <ImageModal modal={modal} setModal={setModal} />
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
