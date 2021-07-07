import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import LogoutButton from './LogoutButton';
import styles from './styles/headerStyles';

export default function Header({ isProfile }: { isProfile: boolean }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.appName}>
          Munro
          {' '}
          <MaterialIcons name="terrain" size={40} />
          {' '}
          Bagger
        </Text>
        {isProfile ? <LogoutButton /> : null}
      </View>
    </SafeAreaView>
  );
}
