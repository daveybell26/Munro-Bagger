import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useHistory } from 'react-router-native';

const styles = StyleSheet.create({
  navFooter: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#427AA1',
    position: 'absolute',
    bottom: 0,
  },
});

const NavFooter = () => {
  const history = useHistory();
  return (
    <SafeAreaView>
      <View style={styles.navFooter}>
        <MaterialIcons name="home" size={35} onPress={() => history.push('/explore')} />
        <MaterialIcons name="terrain" size={35} onPress={() => history.push('/map')} />
        <MaterialIcons name="person" size={35} onPress={() => history.push('/profile')} />
      </View>
    </SafeAreaView>
  );
};

export default NavFooter;
