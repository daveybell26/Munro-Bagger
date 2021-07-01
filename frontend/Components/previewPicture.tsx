import React from 'react';
import {
  View, ImageBackground, StyleSheet,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

const Picture = ({ picture } :any, { retakePicture }: any) => {
  const history = useHistory();

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: picture.uri }} style={styles.image} />
      <MaterialIcons onPress={retakePicture()} name="photo-camera" size={24} color="black" />
      <MaterialIcons onPress={() => history.push('/camera')} name="arrow-back-ios" size={24} color="black" />
    </View>
  );
};

export default Picture;
