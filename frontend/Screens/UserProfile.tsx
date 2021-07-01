import React, { useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  SafeAreaView, Text, StyleSheet, View, Image,
} from 'react-native';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';
import ImageGrid from '../Components/ImageGrid';
import { getUserPicsRandomly } from '../store/getRandomUserPics.store';

const heroImage = require('../assets/hotChick.jpeg');

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    // marginTop: '20%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  userProfileHeroSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 40,
    padding: 20,
    // marginTop: 35,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    padding: 0,
    margin: 0,
  },
  userStatsSection: {
    margin: 20,
  },
  userMunroePics: {
    // marginTop: 5,
  },
  lineBreaks: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});

const UserProfile = () => {
  const userPicList = useSelector((state:any) => state.randomUserPics.pictures);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserPicsRandomly());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <View style={{ flex: 0 }}>
        <View style={styles.userProfileHeroSection}>
          <Image style={styles.userImage} source={heroImage} />
          <Text style={styles.title}>
            Hot Chick
          </Text>
          <View style={{ padding: 10, backgroundColor: '#ddd', borderRadius: 50 }}>
            <MaterialIcons name="photo-camera" size={40} />
          </View>
        </View>

        <View style={styles.lineBreaks} />

        <View style={styles.userStatsSection}>
          <Text style={styles.title}>
            Munroes Climbed
          </Text>
          <Text style={styles.title}>
            70/282
          </Text>
          {/* Status bar to be incooperated (dependent on userMunroeStats state) */}
        </View>

        <View style={styles.lineBreaks} />

        <View style={styles.userMunroePics}>
          <Text style={styles.title}>
            Pictures From Mountains Climbed.
          </Text>
        </View>
      </View>
      <ImageGrid list={userPicList} />
      <NavFooter />
    </SafeAreaView>
  );
};

// TODO
// user profile hero section --> display: flexbox justify: space between
// Profile pic --> img with 50% radius (coming from redux)
// User Name --> Text (coming from redux)
// cameraIcon --> img from Material icons
// userStats section --> display: block
// munroes climbed --> Text
// userMunroeStats --> Text ---> 70/282 (coming from redux)
// status bar ---> html CSS JavaScript (dependent on userMunroeStats state)
// userMountainsClimbed Profile section
// mountains climbed heading
// grid picture list component
// grid picture list item
// flat grid like assembly of pictures taken by users of munroes---> (coming from redux)

export default UserProfile;
