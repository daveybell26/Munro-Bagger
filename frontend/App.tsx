import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import Explore from './Screens/Explore';
import Login from './Screens/Login';
import Map from './Screens/Map';
import MountainProfile from './Screens/MountainProfile';
import UserProfile from './Screens/UserProfile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/mountain" component={MountainProfile} />
          <Route exact path="/profile" component={UserProfile} />
        </Switch>
      </View>
    </NativeRouter>
  );
}
