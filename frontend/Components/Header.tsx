import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import LogoutButton from './LogoutButton';
import styles from './styles/headerStyles';

export default function Header({ isProfile }: { isProfile: boolean }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="terrain" size={50} />
        <Text style={styles.appName}> bagPics</Text>
        {isProfile ? <LogoutButton /> : null}
      </View>
    </SafeAreaView>
  );
}
