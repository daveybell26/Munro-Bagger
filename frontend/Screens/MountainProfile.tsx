import React, { useEffect } from 'react';
import {
  SafeAreaView, Text, Image, View, Pressable, Switch,
} from 'react-native';
import { useParams, useHistory } from 'react-router-native';
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
import { globalStyles } from './styles/GlobalStyles';
import { loginSelector, oneMountainSelector, useAppDispatch } from '../store';
import styles from './styles/mountainProfileStyles';

const MountainProfile = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { mountain } = useSelector(oneMountainSelector);
  const { userDetails } = useSelector(loginSelector);
  const createClimbedListener = useSelector((state: any) => state.unclimbedCreate.climbedStatusObj);
  const updateClimbedListener = useSelector((state: any) => state.unclimbedUpdate.climbedStatusArr);
  const createWishListener = useSelector((state: any) => state.wishlistCreate.wishlistStatusObj);
  const updateWishListener = useSelector((state: any) => state.wishlistUpdate.wishlistStatusArr);

  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [createClimbedListener, updateClimbedListener, createWishListener, updateWishListener]);

  const changeClimbedStatus = () => {
    if (mountain.Statuses.length === 0) {
      dispatch(postClimbedStatus({ UserId: userDetails.id, id }));
    } else {
      dispatch(putClimbedStatus({
        id: mountain.Statuses[0]?.id,
        bool: !mountain.Statuses[0]?.climbed,
      }));
    }
  };

  const changeWishlistStatus = () => {
    if (mountain.Statuses.length === 0) {
      dispatch(postWishlistStatus(id));
    } else {
      dispatch(putWishlistStatus({
        id: mountain.Statuses[0]?.id,
        bool: !mountain.Statuses[0]?.wishlist,
      }));
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      {mountain.id ? (
        <>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: mountain.imageUrl }}
              style={{ width: '100%', height: 200 }}
            />
          </View>
          <Text style={globalStyles.subHeaders}>{mountain.name}</Text>
          <SafeAreaView style={styles.info}>
            <Text style={globalStyles.stats}>
              Elevation:
              {' '}
              {mountain.Peak?.elevation}
              m
            </Text>
            <Text style={globalStyles.stats}>
              Climbed:
              {' '}
            </Text>
            <Switch
              trackColor={{ false: 'red', true: 'green' }}
              ios_backgroundColor="red"
              onValueChange={() => changeClimbedStatus()}
              value={mountain.Statuses[0]?.climbed ? mountain.Statuses[0]?.climbed : false}
            />
            <Text style={globalStyles.stats}>
              Wishlist:
              {' '}
            </Text>
            <Switch
              trackColor={{ false: 'red', true: 'green' }}
              ios_backgroundColor="red"
              onValueChange={() => changeWishlistStatus()}
              value={mountain.Statuses[0]?.wishlist ? mountain.Statuses[0]?.wishlist : false}
            />
          </SafeAreaView>
          <SafeAreaView style={styles.routeButton}>
            <Pressable onPress={() => history.push('/route')}>
              <FontAwesome5 name="route" size={50} color={mountain.Statuses[0]?.climbed ? 'green' : 'red'} />
            </Pressable>
            <Text>
              Show Route
            </Text>
          </SafeAreaView>
          <ImageGrid list={mountain.Pictures} />
        </>
      ) : null}
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
