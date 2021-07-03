import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text, StyleSheet, Image, View, Switch
} from 'react-native';
import { useParams } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMountain } from '../store/getOneMountain.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';
import { globalStyles } from './styles/GlobalStyles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0,
  },
});

const MountainProfile = () => {
  const { id } = useParams<{ id: string }>();
  const {
    name, imageUrl, Pictures, Peak, Statuses,
  } = useSelector((state:any) => state.oneMountain.mountain);

  const userId = useSelector((state: any) => state.login.userDetails.id);
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();
  
  const toggleSwitch2 = () => Statuses.length === 0 ? false : Statuses[0].climbed;
  useEffect(() => {
    dispatch(getOneMountain(+id));
    ()=> { toggleSwitch2() }
    
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <Text style={globalStyles.subHeaders}>
        Information about
        {' '}
        {name}
      </Text>
      <Text style={globalStyles.stats}>
        Elevation:
        {' '}
        {Peak?.elevation}
        m
      </Text>
      <Switch
        trackColor={{ false: "red", true: "green" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="red"
        // onValueChange={}
        value={toggleSwitch2}
      />
      <ImageGrid list={Pictures} />
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
