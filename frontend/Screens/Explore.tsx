import React, { useEffect } from 'react';
import {
  FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { getRandomMountains } from '../store/explore.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import { globalStyles } from './styles/GlobalStyles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
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
    marginBottom: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    marginBottom: 80,
  },
});

const Explore = () => {
  const list = useSelector((state: any) => state.exploreRandomMountains.randomMountainsList);

  const dispatch = useDispatch();
  const history = useHistory();

  const randomMountainImage = (id: number, name: string, uri: string) => (
    <View>
      <Pressable onPress={() => history.push(`/mountain/${id}`)}>
        <Image
          source={{ uri }}
          style={{ width: '100%', height: 200 }}
        />
        <Text style={globalStyles.subHeaders}>{name}</Text>
      </Pressable>
    </View>

  );

  useEffect(() => {
    dispatch(getRandomMountains());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={globalStyles.header}>Explore Screen</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => randomMountainImage(item.id, item.name, item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
