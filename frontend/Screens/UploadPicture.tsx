import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { getMountains } from '../store/getAllMountains.store';
import styles from './styles/uploadPictureStyles';
import cloudinaryUpload from '../cloudinary';
import { postPicture } from '../services/apiService';
import { allMountainSelector, loginSelector, useAppDispatch } from '../store';

const UploadPicture = ({
  picture,
  setModalVisible,
  modalVisible,
} : {
  picture: any,
  setModalVisible: any,
  modalVisible: any
}) => {
  const [selectedMountain, setSelectedMountain] = useState(0);
  const [loading, setLoading] = useState(false);

  const { mountainList } = useSelector(allMountainSelector);
  const { userDetails } = useSelector(loginSelector);

  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getMountains());
  }, [dispatch]);

  const uploadHandler = async () => {
    setLoading(true);
    const cloudinaryUrl = await cloudinaryUpload(picture);
    await postPicture(userDetails.id, selectedMountain, cloudinaryUrl);
    setLoading(false);
    history.push('/profile');
  };

  const pickers = mountainList
    ? mountainList
      .map((location) => (
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
      <Picker
        selectedValue={selectedMountain}
        onValueChange={(itemValue) => setSelectedMountain(itemValue)}
      >
        {pickers}
      </Picker>
      {loading
        ? <ActivityIndicator size="large" />
        : (
          <View style={styles.buttonContainer}>
            <SafeAreaView style={styles.button}>
              <TouchableOpacity onPress={() => uploadHandler()}>
                <MaterialIcons name="check-circle-outline" size={24} color="black" />
              </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.button}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <MaterialIcons name="highlight-remove" size={24} color="black" />
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        )}
    </SafeAreaView>
  );
};

export default UploadPicture;
