import React, { useEffect } from 'react';
import {
  FlatList, Image, Pressable, SafeAreaView, Text, View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-native';
import { getRandomMountains } from '../store/explore.store';
import { getExploreUnclimbedMountains } from '../store/getUnclimbedMountains.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import CircularThumbnailImage from '../Components/CircularThumbnailImage';
import {
  randomMountainSelector, unclimbedMountainsSelector, loginSelector, useAppDispatch,
} from '../store';
import styles from './styles/exploreStyles';

const Explore = () => {
  const { randomMountainsList } = useSelector(randomMountainSelector);
  const { unclimbedMountainsList } = useSelector(unclimbedMountainsSelector);
  const { userDetails, authToken } = useSelector(loginSelector);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const randomMountainImage = (id: number, name: string, uri: string) => (
    <View>
      <Pressable onPress={() => history.push(`/mountain/${id}`)}>
        <Image
          source={{ uri }}
          style={{ width: '100%', height: 200 }}
        />
        <Text style={styles.randomMountainNames}>{name}</Text>
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
    if (userDetails.id) {
      dispatch(getExploreUnclimbedMountains(
        { userId: userDetails.id, jwtToken: authToken },
      ));
    }
    dispatch(getRandomMountains(authToken));
  }, [dispatch, userDetails.id]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={{ flex: 0 }}>
        <Header isProfile={false} />
        <FlatList
          data={unclimbedMountainsList}
          horizontal
          renderItem={({ item }) => unclimbedMountainImage(item.id, item.name, item.imageUrl)}
          keyExtractor={(item) => item.id.toString()}
          style={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.lineBreaks} />
      <View style={{ flex: 1 }}>
        <Text style={styles.randomMountainHeader}>Recent Activity</Text>
        <FlatList
          data={randomMountainsList}
          renderItem={({ item }) => randomMountainImage(item.id, item.name, item.imageUrl)}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
