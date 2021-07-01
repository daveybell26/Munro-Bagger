import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMountains } from '../store/getAllMountains.store';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 25,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
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

  // eslint-disable-next-line max-len
  const pickers = mountainList ? mountainList.map((location: any) => <Picker.Item key={location.id} label={location.name} value={location.id} />) : null;

  if (pickers?.length) console.log(picture);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Pick a Mountain</Text>
      <TouchableWithoutFeedback>
        <Picker
          selectedValue={selectedMountain}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onValueChange={(itemValue, itemIndex) => setSelectedMountain(itemValue)}
        >
          {pickers}
        </Picker>
      </TouchableWithoutFeedback>
      <TouchableOpacity onPress={() => history.push('/camera')}>
        <MaterialIcons name="highlight-remove" size={24} color="black" />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default UploadPicture;
