import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  navFooter: {
    width: '100%',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#427AA1',
    position: 'absolute',
    bottom: 0,
  },
});

const NavFooter = () => (
  <View style={styles.navFooter}>
    <MaterialIcons name="home" size={28} />
    <MaterialIcons name="terrain" size={28} />
    <MaterialIcons name="person" size={28} />
  </View>
);

export default NavFooter;
