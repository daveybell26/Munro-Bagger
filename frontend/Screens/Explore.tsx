import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, Text, Image, View, FlatList,
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

  const randomMountainImage = (name:string, uri: string) => (
    <View>
      <Text>{ name }</Text>
      <Image
        source={{ uri }}
        style={{ width: '100%', height: 200 }}
      />
    </View>

  );

  useEffect(() => {
    dispatch(getRandomMountains());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.title}>Explore Screen</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => randomMountainImage(item.name, item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
      />
      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
