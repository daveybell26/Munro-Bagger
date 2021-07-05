import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useHistory, useLocation } from 'react-router-native';

const styles = StyleSheet.create({
  navFooter: {
    width: '100%',
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#427AA1',
  },
});

const NavFooter = () => {
  // when user presses icon, a new markers jsx componenet rendered with different color.
  const urlLocation = useLocation();

  const isOnExploreScreen = urlLocation.pathname === '/';
  const isOnMapScreen = urlLocation.pathname === '/map';
  const isOnProfileScreen = urlLocation.pathname === '/profile';

  const history = useHistory();
  return (
    <SafeAreaView style={{ flex: 0 }}>
      <View style={styles.navFooter}>
        {isOnExploreScreen
          ? <MaterialIcons name="home" size={35} color="white" onPress={() => history.push('/')} />
          : <MaterialIcons name="home" size={35} onPress={() => history.push('/')} />}
        {isOnMapScreen
          ? <MaterialIcons name="terrain" size={35} color="white" onPress={() => history.push('/map')} />
          : <MaterialIcons name="terrain" size={35} onPress={() => history.push('/map')} />}
        {isOnProfileScreen
          ? <MaterialIcons name="person" size={35} color="white" onPress={() => history.push('/profile')} />
          : <MaterialIcons name="person" size={35} onPress={() => history.push('/profile')} />}
      </View>
    </SafeAreaView>
  );
};

export default NavFooter;
