import React, { useEffect } from 'react';
import {
  Image, Pressable, SafeAreaView, Text, View,
} from 'react-native';
import { useParams, useHistory } from 'react-router-native';
import { useSelector } from 'react-redux';
import { FontAwesome5 } from '@expo/vector-icons';
import { getOneMountain } from '../store/getOneMountain.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';
import { globalStyles } from './styles/GlobalStyles';
import { oneMountainSelector, useAppDispatch } from '../store';
import styles from './styles/mountainProfileStyles';

const MountainProfile = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { mountain } = useSelector(oneMountainSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      {Object.keys(mountain).length !== 0 ? (
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
              Status:
              {' '}
              {mountain.Statuses[0]?.climbed ? 'Climbed' : 'Not Climbed'}
            </Text>
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
