import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#427AA1',
    position: 'absolute',
    top: 0,
  },
  appName: {
    width: '70%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',

  },
});

export default function Header() {
  return (
    <SafeAreaView style={styles.header}>
      <MaterialIcons name="terrain" size={50} />
      <Text style={styles.appName}> bagPics</Text>
    </SafeAreaView>
  );
}
