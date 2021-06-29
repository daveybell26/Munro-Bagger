import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { getAllMountains } from '../mockMunros.json';
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
  const [mountainToDisplay] = getAllMountains.filter((mountain) => mountain.id === +id);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <Text style={styles.title}>Mountain Profile Screen</Text>
      <Text>{mountainToDisplay.name}</Text>
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
