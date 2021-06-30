import React, { useEffect } from 'react';
import {
  SafeAreaView, Text, StyleSheet, Image,
} from 'react-native';
import { useParams } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMountain } from '../store/getOneMountain.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';

const styles = StyleSheet.create({
  title: {
    marginTop: '20%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const MountainProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { name, imageUrl, Pictures } = useSelector((state:any) => state.oneMountain.mountain);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Text style={styles.title}>Mountain Profile Screen</Text>
      <Text>{name}</Text>
      <Image
        source={{ uri: imageUrl }}
        style={{ width: 200, height: 200, margin: 10 }}
      />
      <ImageGrid list={Pictures} />
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
