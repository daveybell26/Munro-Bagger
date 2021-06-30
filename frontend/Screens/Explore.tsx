import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMountains } from '../store/getAllMountains.store';
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
  const list = useSelector((state:any) => state.allMountains.mountainList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMountains());
  }, [dispatch]);

  // TODO: remove this console.log
  console.log(list[0]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <Text style={styles.title}>Explore Screen</Text>
      <NavFooter />
    </SafeAreaView>
  );
};

export default Explore;
