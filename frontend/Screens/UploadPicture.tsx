import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, Text, StyleSheet, TouchableOpacity, View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useHistory } from 'react-router-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getMountains } from '../store/getAllMountains.store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    marginTop: '20%',
  },
  button: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    height: 50,
    width: 50,
    margin: 5,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  listContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    flexDirection: 'row',
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
  const pickers = mountainList ? mountainList.map((location: any) => <Picker.Item key={location.id} label={location.name} value={location.id} />).sort((a, b) => a.props.value - b.props.value) : null;

  if (pickers?.length) console.log(picture);

  if (selectedMountain) console.log(selectedMountain);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Pick a Mountain</Text>
      <View style={styles.listContainer}>
        <Picker
          selectedValue={selectedMountain}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
