import React from 'react';
import { FlatList, Image, SafeAreaView } from 'react-native';

const ImageGrid = ({ list }: { list:any }) => {
  const singleImage = (uri: string) => (
    <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={{ uri }}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <FlatList
        data={list}
        renderItem={({ item }) => singleImage(item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        style={{ marginTop: 10, marginBottom: 50 }}
      />
    </SafeAreaView>
  );
};

export default ImageGrid;
