import React, { useEffect } from 'react';
import {
  SafeAreaView, Text, StyleSheet, Image, View,
} from 'react-native';
import { useParams, useHistory } from 'react-router-native';
import { useDispatch, useSelector } from 'react-redux';
import { getOneMountain } from '../store/getOneMountain.store';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';
import { globalStyles } from './styles/GlobalStyles';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 0,
  },
});

const MountainProfile = () => {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const {
    name, imageUrl, Pictures, Peak, Statuses,
  } = useSelector((state:any) => state.oneMountain.mountain);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneMountain(+id));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: '100%', height: 200 }}
        />
      </View>
      <Text style={globalStyles.subHeaders}>
        Information about
        {' '}
        {name}
      </Text>
      <Text style={globalStyles.stats}>
        Elevation:
        {' '}
        {Peak?.elevation}
        m
      </Text>
      <Text style={globalStyles.stats}>
        Status:
        {' '}
        {Statuses?.climbed ? 'Climbed' : 'Not Climbed'}
      </Text>
      <Text onPress={() => history.push('/route')}>Show Route</Text>
      <ImageGrid list={Pictures} />
      <NavFooter />
    </SafeAreaView>
  );
};

export default MountainProfile;
