import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMountain } from '../store/getOneMountain.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';

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
  const mountainToDisplay = useSelector((state:any) => state.oneMountain.mountain);
  const dispatch = useDispatch();
  const { name } = mountainToDisplay;
  const { Pictures } = mountainToDisplay;
  console.log(typeof Pictures);

  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Text style={styles.title}>Mountain Profile Screen</Text>
      <Text>{name}</Text>
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
