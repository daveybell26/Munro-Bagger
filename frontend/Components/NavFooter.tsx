import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useHistory, useLocation } from 'react-router-native';
import styles from './styles/navFooterStyles';

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
