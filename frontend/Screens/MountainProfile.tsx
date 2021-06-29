import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useParams } from 'react-router-native';
import { getAllMountains } from '../mockMunros.json';
import NavFooter from '../Components/NavFooter';

const MountainProfile = () => {
  const { id } = useParams<{ id: string }>();
  const [mountainToDisplay] = getAllMountains.filter((mountain) => mountain.id === +id);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>{mountainToDisplay.name}</Text>
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
