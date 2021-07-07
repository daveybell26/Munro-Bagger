import React from 'react';
import {
  SafeAreaView, View, Text, TouchableOpacity,
} from 'react-native';
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

          <View>
            <TouchableOpacity style={styles.iconStyling} onPress={() => history.push('/')}>
              <MaterialIcons name="home" size={35} color="white" />
              <Text style={styles.selectedFooterText}>Explore</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.iconStyling} onPress={() => history.push('/')}>
              <MaterialIcons name="home" size={35} />
              <Text style={styles.nonSelectedFooterText}>Explore</Text>
            </TouchableOpacity>
          </View>
        )}

        {isOnMapScreen ? (
          <View>
            <TouchableOpacity style={styles.iconStyling} onPress={() => history.push('/map')}>
              <MaterialIcons name="terrain" size={35} color="white" />
              <Text style={styles.selectedFooterText}>Map</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.iconStyling} onPress={() => history.push('/map')}>
              <MaterialIcons name="terrain" size={35} />
              <Text style={styles.nonSelectedFooterText}>Map</Text>
            </TouchableOpacity>
          </View>
        )}

        {isOnProfileScreen ? (
          <View>
            <TouchableOpacity style={styles.iconStyling} onPress={() => history.push('/profile')}>
              <MaterialIcons name="person" size={35} color="white" />
              <Text style={styles.selectedFooterText}>Profile</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <TouchableOpacity style={styles.iconStyling} onPress={() => history.push('/profile')}>
              <MaterialIcons name="person" size={35} />
              <Text style={styles.nonSelectedFooterText}>Profile</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NavFooter;
