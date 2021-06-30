import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, Text, View, Image,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMountains } from '../store/explore.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';

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
});

const Explore = () => {
  const list = useSelector((state:any) => state.exploreRandomMountains.randomMountainsList);
  const dispatch = useDispatch();
  const listOfRandomMountains = list ? list.map((mountain: any) => {
    const { name, imageUrl } = mountain;
    return (
      <View>
        <Text>{name}</Text>
        <Image source={{ uri: imageUrl }} />
      </View>
    );
  }) : null;

  useEffect(() => {
    dispatch(getRandomMountains());
  }, [dispatch]);

  // TODO: remove this console.log
  console.log(list[0]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.title}>Explore Screen</Text>
      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
