import React from 'react';
import {
  SafeAreaView, ImageBackground, StyleSheet, TouchableOpacity,
} from 'react-native';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    padding: 25,
  },
  button: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    height: 50,
    width: 50,
  },
});

const Picture = ({
  picture,
  retakePicture,
}: {
  picture: any;
  retakePicture: any;
}) => {
  const history = useHistory();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: picture.uri }} style={styles.image}>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => retakePicture()}>
            <MaterialIcons name="photo-camera" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => history.push({ pathname: '/uploadPicture', state: picture.uri })}>
            <MaterialIcons name="check-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => history.push('/camera')}>
            <MaterialIcons name="highlight-remove" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Picture;
