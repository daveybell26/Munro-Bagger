import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useParams } from 'react-router-native';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import { getAllMountains } from '../mockMunros.json';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    marginTop: '20%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    flex: 1,
    width: '100%',
    fontSize: 12,
    textAlign: 'center',
  },
});

const MountainProfile = () => {
  const { id } = useParams<{ id: string }>();
  // fetching mockData to be replaced with api call
  const [mountainToDisplay] = getAllMountains.filter((mountain) => mountain.id === +id);
  const { name } = mountainToDisplay;

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.title}>Mountain Profile Screen</Text>
      <Text style={styles.name}>{name}</Text>
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
