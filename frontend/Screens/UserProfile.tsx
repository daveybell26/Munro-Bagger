import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import NavFooter from '../Components/NavFooter';

const UserProfile = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text>User Profile Screen</Text>
    <NavFooter />
  </SafeAreaView>
);

export default UserProfile;
