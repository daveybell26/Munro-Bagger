import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  SafeAreaView, Text, StyleSheet, View, Image,
} from 'react-native';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';

const heroImage = require('../assets/hotChick.jpeg');

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  safeArea: {
    flex: 1,
  },
  userProfileHeroSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
    padding: 20,
    marginTop: 35,

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
    marginTop: 5,
  },
  lineBreaks: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
  },
});

const UserProfile = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header />
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
      {/* Status bar to be incooperated html CSS JavaScript (dependent on userMunroeStats state) */}
    </View>

    <View style={styles.lineBreaks} />

    <View style={styles.userMunroePics}>
      <Text style={styles.title}>
        Pictures From Mountains Climbed.
      </Text>
    </View>
    <NavFooter />
  </SafeAreaView>
);

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
