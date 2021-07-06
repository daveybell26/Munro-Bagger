import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import LogoutButton from './LogoutButton';
import styles from './styles/headerStyles';

export default function Header({ isProfile }: { isProfile: boolean }) {
  return (
    <SafeAreaView style={{ flex: 0 }}>
      <View style={styles.header}>
        <MaterialIcons name="terrain" size={50} />
        <Text style={styles.appName}> bagPics</Text>
        {isProfile ? <LogoutButton /> : null}
      </View>
    </SafeAreaView>
  );
}
