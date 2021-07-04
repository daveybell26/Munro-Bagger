import React, { useEffect } from 'react';
import {
  FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { getRandomMountains } from '../store/explore.store';
import { getExploreUnclimbedMountains } from '../store/getUnclimbedMountains.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import { globalStyles } from './styles/GlobalStyles';
import CircularThumbnailImage from '../Components/CircularThumbnailImage';
import {
  randomMountainSelector, unclimbedMountainsSelector, loginSelector, useAppDispatch,
} from '../store';

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
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
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
  const { randomMountainsList } = useSelector(randomMountainSelector);
  const { unclimbedMountainsList } = useSelector(unclimbedMountainsSelector);
  const { userDetails } = useSelector(loginSelector);
  const dispatch = useAppDispatch();
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

  const unclimbedMountainImage = (id: number, name: string, uri: string) => (
    <View style={styles.view}>
      <Pressable onPress={() => history.push(`/mountain/${id}`)}>
        <CircularThumbnailImage imageUrl={uri} />
        <Text style={styles.unclimbedMountainNames} numberOfLines={1}>{name}</Text>
      </Pressable>
    </View>

  );

  useEffect(() => {
    dispatch(getRandomMountains());
    dispatch(getExploreUnclimbedMountains(userDetails.id));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={globalStyles.header}>List of unclimbed mountains</Text>
      <FlatList
        data={unclimbedMountainsList}
        horizontal
        renderItem={(
          { item } : { item: MountainInfo },
        ) => unclimbedMountainImage(item.id, item.name, item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
        style={styles.horizontalList}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={globalStyles.subHeaders}>Pictures of other users</Text>
      <FlatList
        data={randomMountainsList}
        renderItem={(
          { item }: { item: MountainInfo },
        ) => randomMountainImage(item.id, item.name, item.imageUrl)}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
