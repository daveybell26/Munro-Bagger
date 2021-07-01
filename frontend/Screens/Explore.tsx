import React, { useEffect } from 'react';
import {
  FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { getRandomMountains } from '../store/explore.store';
import { getExploreUnclimbedMountains } from '../store/getUnclimbedMountains.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import CircularThumbnailImage from '../Components/CircularThumbnailImage';

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
  verticalList: {
    marginBottom: 80,
  },
  horizontalList: {
    height: '40%',
  },
  unclimbedMountainNames: {
    color: 'black',
    textAlign: 'center',
    width: 100,
    justifyContent: 'space-around',

  },
  view: {
    margin: 10,
    alignItems: 'flex-end',
    width: 100,

  },
});

const Explore = () => {
  const list = useSelector((state: any) => state.exploreRandomMountains.randomMountainsList);
  const unclimbedArr = useSelector((state: any) => state.unclimbedMountains.unclimbedMountainsList);
  const userId = useSelector((state: any) => state.login.userDetails.id);
  const dispatch = useDispatch();
  const history = useHistory();

  const randomMountainImage = (id: number, name: string, uri: string) => (
    <View>
      <Pressable onPress={() => history.push(`/mountain/${id}`)}>
        <Image
          source={{ uri }}
          style={{ width: '100%', height: 200 }}
        />
        <Text style={styles.pictureTitle}>{name}</Text>
      </Pressable>
    </View>

  );
  const unClimbedMountainImage = (id: number, name: string, uri: string) => (
    <View style={styles.view}>
      <Pressable onPress={() => history.push(`/mountain/${id}`)}>
        <CircularThumbnailImage imageUrl={uri} />
        <Text style={styles.unclimbedMountainNames} numberOfLines={1}>{name}</Text>
      </Pressable>
    </View>

  );

  useEffect(() => {
    dispatch(getRandomMountains());
    dispatch(getExploreUnclimbedMountains(userId));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.title}>List of unclimbed mountains</Text>
      <FlatList
        data={unclimbedArr}
        horizontal
        renderItem={({ item }) => unClimbedMountainImage(item.id, item.name, item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
        style={styles.horizontalList}
        showsHorizontalScrollIndicator={false}

      />
      <Text style={styles.title}>Pictures of other users</Text>
      <FlatList
        data={list}
        renderItem={({ item }) => randomMountainImage(item.id, item.name, item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
        style={styles.verticalList}
        showsVerticalScrollIndicator={false}
      />

      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
