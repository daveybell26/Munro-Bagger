import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({

  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 50,
    marginBottom: 0,
  },
});

const CircularThumbnailImage = ({ imageUrl }: { imageUrl: string }) => (
  <Image style={styles.userImage} source={{ uri: imageUrl }} />
);

export default CircularThumbnailImage;
