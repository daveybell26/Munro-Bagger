import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';
import store from './store/index';
import Explore from './Screens/Explore';
import Login from './Screens/Login';
import Map from './Screens/Map';
import MountainProfile from './Screens/MountainProfile';
import UserProfile from './Screens/UserProfile';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/mountain/:id" component={MountainProfile} />
            <Route exact path="/profile" component={UserProfile} />
          </Switch>
        </View>
      </NativeRouter>
    </Provider>
  );
}
