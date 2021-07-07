import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useHistory, useLocation } from 'react-router-native';
import styles from './styles/navFooterStyles';

const NavFooter = () => {
  const urlLocation = useLocation();

  const isOnExploreScreen = urlLocation.pathname === '/';
  const isOnMapScreen = urlLocation.pathname === '/map';
  const isOnProfileScreen = urlLocation.pathname === '/profile';

  const history = useHistory();
  return (
    <SafeAreaView style={{ flex: 0 }}>
      <View style={styles.navFooter}>
        {isOnExploreScreen ? (
          <View style={styles.iconStyling}>
            <MaterialIcons name="home" size={35} color="white" onPress={() => history.push('/')} />
            <Text style={styles.selectedFooterText}>Explore</Text>
          </View>
        ) : (
          <View style={styles.iconStyling}>
            <MaterialIcons name="home" size={35} onPress={() => history.push('/')} />
            <Text style={styles.nonSelectedFooterText}>Explore</Text>
          </View>
        )}

        {isOnMapScreen ? (
          <View style={styles.iconStyling}>
            <MaterialIcons name="terrain" size={35} color="white" onPress={() => history.push('/map')} />
            <Text style={styles.selectedFooterText}>Map</Text>
          </View>
        ) : (
          <View style={styles.iconStyling}>
            <MaterialIcons name="terrain" size={35} onPress={() => history.push('/map')} />
            <Text style={styles.nonSelectedFooterText}>Map</Text>
          </View>
        )}

        {isOnProfileScreen ? (
          <View style={styles.iconStyling}>
            <MaterialIcons name="person" size={35} color="white" onPress={() => history.push('/profile')} />
            <Text style={styles.selectedFooterText}>Profile</Text>
          </View>
        ) : (
          <View style={styles.iconStyling}>
            <MaterialIcons name="person" size={35} onPress={() => history.push('/profile')} />
            <Text style={styles.nonSelectedFooterText}>Profile</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NavFooter;
