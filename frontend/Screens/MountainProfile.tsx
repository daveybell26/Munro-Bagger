import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMountain } from '../store/getOneMountain.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: '10%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const MountainProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { name, Pictures } = useSelector((state:any) => state.oneMountain.mountain);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.title}>{name}</Text>
      <ImageGrid list={Pictures} />
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
