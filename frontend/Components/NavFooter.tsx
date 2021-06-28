import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  navFooter: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  homeIcon: {
    position: 'absolute',
    left: 16,
  },
  personIcon: {
    position: 'absolute',
    right: 16,
  },
  terrainIcon: {
    position: 'absolute',
  },
});

const NavFooter = () => (
  <View style={styles.navFooter}>
    <MaterialIcons name="home" size={28} style={styles.homeIcon} />
    <MaterialIcons name="person" size={28} style={styles.personIcon} />
    <MaterialIcons name="terrain" size={28} style={styles.terrainIcon} />
  </View>
);

export default NavFooter;
