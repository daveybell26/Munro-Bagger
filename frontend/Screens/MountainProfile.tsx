import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, Text, Image, View, Pressable, Switch,
} from 'react-native';
import { useParams } from 'react-router-native';
import { useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { getOneMountain } from '../store/getOneMountain.store';
import { postClimbedStatus } from '../store/postClimbed.store';
import { putClimbedStatus } from '../store/putClimbed.store';
import { postWishlistStatus } from '../store/postWishlist.store';
import { putWishlistStatus } from '../store/putWishlist.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';
import RouteMap from '../Components/RouteMap';
import {
  createClimbedSelector,
  createWishSelector,
  loginSelector,
  oneMountainSelector,
  updateClimbedSelector,
  updateWishSelector,
  useAppDispatch,
} from '../store';
import styles from './styles/mountainProfileStyles';

const MountainProfile = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { mountain } = useSelector(oneMountainSelector);
  const { userDetails, authToken } = useSelector(loginSelector);
  const { climbedStatusObj } = useSelector(createClimbedSelector);
  const { climbedStatusArr } = useSelector(updateClimbedSelector);
  const { wishlistStatusObj } = useSelector(createWishSelector);
  const { wishlistStatusArr } = useSelector(updateWishSelector);
  const [mapVisibility, setMapVisibility] = useState(false);

  useEffect(() => {
    dispatch(getOneMountain({ UserId: userDetails.id, id: +id, jwtToken: authToken }));
  }, [climbedStatusObj, climbedStatusArr, wishlistStatusObj, wishlistStatusArr]);

  function toggleMapVisibility() {
    setMapVisibility(!mapVisibility);
  }

  const changeClimbedStatus = () => (mountain.Statuses.length === 0
    ? dispatch(postClimbedStatus({ userId: userDetails.id, id: +id, jwtToken: authToken }))
    : dispatch(putClimbedStatus({
      id: mountain.Statuses[0]?.id,
      bool: !mountain.Statuses[0]?.climbed,
      jwtToken: authToken,
    })));

  const changeWishlistStatus = () => (mountain.Statuses.length === 0
    ? dispatch(postWishlistStatus({ userId: userDetails.id, id: +id, jwtToken: authToken }))
    : dispatch(putWishlistStatus({
      id: mountain.Statuses[0]?.id,
      bool: !mountain.Statuses[0]?.wishlist,
      jwtToken: authToken,
    })));

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header isProfile={false} />
      {mountain.id && mapVisibility ? (
        <SafeAreaView style={{ flex: 1 }}>
          <RouteMap toggleMapVisibility={toggleMapVisibility} mountain={mountain} />
        </SafeAreaView>
      ) : null}
      {mountain.id && !mapVisibility ? (
        <>
          <View>
            <Image
              source={{ uri: mountain.imageUrl }}
              style={{ width: '100%', height: 200 }}
            />
            <Text style={styles.mountainName}>{mountain.name}</Text>
          </View>
          <View style={styles.mountainHeight}>
            <Text>
              {mountain.Peak?.elevation}
              m
            </Text>
          </View>
          <View style={styles.lineBreaks} />
          <View style={styles.infoContainer}>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Text>
                  Climbed:
                  {' '}
                </Text>
                <Switch
                  trackColor={{ false: 'red', true: 'green' }}
                  ios_backgroundColor="red"
                  onValueChange={() => changeClimbedStatus()}
                  value={mountain.Statuses[0]?.climbed ? mountain.Statuses[0]?.climbed : false}
                />
              </View>
              <View style={styles.infoItem}>
                <Text>
                  Wishlist:
                  {'  '}
                </Text>
                <Switch
                  trackColor={{ false: 'red', true: 'green' }}
                  ios_backgroundColor="red"
                  onValueChange={() => changeWishlistStatus()}
                  value={mountain.Statuses[0]?.wishlist ? mountain.Statuses[0]?.wishlist : false}
                />
              </View>
            </View>
            <View>
              <Pressable onPress={toggleMapVisibility} style={{ flex: 0, justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="route" size={50} color={mountain.Statuses[0]?.climbed ? 'green' : 'red'} />
                <Text style={{ marginTop: 5 }}>
                  Show Route
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.lineBreaks} />
          <ImageGrid list={mountain.Pictures} />
        </>
      ) : null}
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
