/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMountains } from '../store/getAllMountains.store';
import styles from './styles/uploadPictureStyles';

const UploadPicture = (pictureToBeUploaded : any) => {
  const [selectedMountain, setSelectedMountain] = useState();
  const mountainList: MountainInfo[] = useSelector((state:any) => state.allMountains.mountainList);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    history: {
      location: {
        state: { pictureToBeUploaded: picture },
      },
    },
  } = pictureToBeUploaded;

  useEffect(() => {
    dispatch(getMountains());
  }, [dispatch]);

  const pickers = mountainList
    ? mountainList
      .map((location: any) => (
        <Picker.Item
          key={location.id}
          label={location.name}
          value={location.id}
        />
      ))
      .sort((a, b) => a.props.value - b.props.value)
    : null;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Pick a Mountain</Text>
      <View style={styles.listContainer}>
        <Picker
          selectedValue={selectedMountain}
          onValueChange={(itemValue) => setSelectedMountain(itemValue)}
        >
          {pickers}
        </Picker>
      </View>
      <View style={styles.buttonContainer}>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity>
            <MaterialIcons name="check-circle-outline" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => history.push('/camera')}>
            <MaterialIcons name="highlight-remove" size={24} color="black" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>

    </SafeAreaView>
  );
};

export default UploadPicture;
