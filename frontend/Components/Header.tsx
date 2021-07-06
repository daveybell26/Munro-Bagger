import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import LogoutButton from './LogoutButton';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#427AA1',
  },
  appName: {
    width: '70%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default function Header({ isProfile }: { isProfile: boolean }) {
  // const location = useLocation();
  // console.log(location)
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
