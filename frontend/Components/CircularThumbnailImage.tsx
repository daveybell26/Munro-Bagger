import React from 'react';
import { Image } from 'react-native';
import styles from './styles/circularThumbnailImageStyles';

const CircularThumbnailImage = ({ imageUrl }: { imageUrl: string }) => (
  <Image style={styles.userImage} source={{ uri: imageUrl }} />
);

export default CircularThumbnailImage;
