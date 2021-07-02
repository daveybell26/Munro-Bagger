import React from 'react';
import { Provider } from 'react-redux';
import { NativeRouter, Switch, Route } from 'react-router-native';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import store from './store/index';
import Explore from './Screens/Explore';
import Login from './Screens/Login';
import Map from './Screens/Map';
import MountainProfile from './Screens/MountainProfile';
import UserProfile from './Screens/UserProfile';
import CameraScreen from './Screens/Camera';
import UploadPicture from './Screens/UploadPicture';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#427AA1' }}>
        <Provider store={store}>
          <NativeRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/map" component={Map} />
              <Route exact path="/mountain/:id" component={MountainProfile} />
              <Route exact path="/profile" component={UserProfile} />
              <Route exact path="/camera" component={CameraScreen} />
              <Route exact path="/uploadPicture" component={UploadPicture} />
            </Switch>
          </NativeRouter>
        </Provider>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
