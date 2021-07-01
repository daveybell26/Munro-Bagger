import React, { useEffect } from 'react';
import {
  SafeAreaView, StyleSheet, Text, Image, View, FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMountains } from '../store/explore.store';
import { getExploreUnclimbedMountains } from '../store/getUnclimbedMountains.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    flex: 0,
    marginTop: '5%',
    marginBottom: '2%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pictureTitle: {
    marginTop: '2%',
    marginBottom: '2%',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const Explore = () => {
  const list = useSelector((state: any) => state.exploreRandomMountains.randomMountainsList);
  const userId = useSelector((state: any) => state.login.userDetails.id);
  // hook broken into 2 line due to esLINT
  // const unclimbedArr = useSelector((state: any) =>
  // state.unclimbedMountains.unclimbedMountainsList);
  const dispatch = useDispatch();

  const randomMountainImage = (name: string, uri: string) => (
    <View>
      <Text style={styles.pictureTitle}>{name}</Text>
      <Image
        source={{ uri }}
        style={{ width: '100%', height: 200 }}
      />
    </View>

  );

  useEffect(() => {
    dispatch(getRandomMountains());
    dispatch(getExploreUnclimbedMountains(userId));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.title}>Explore Screen</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => randomMountainImage(item.name, item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
      />
      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
