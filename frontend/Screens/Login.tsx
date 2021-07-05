import React, { useState, useEffect } from 'react';
import {
  ImageBackground, View, Alert, Platform,
} from 'react-native';
import {
  NativeRouter, Switch, Route,
} from 'react-router-native';
import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import { postLogin } from '../store/login.store';
import { useAppDispatch } from '../store';
import styles from './styles/loginStyles';

import Explore from './Explore';
import Map from './Map';
import MountainProfile from './MountainProfile';
import UserProfile from './UserProfile';
import CameraScreen from './Camera';
import UploadPicture from './UploadPicture';

const backGroundImage = require('../assets/background.jpg');

const auth0ClientId = 'CEoOtg3BpAsHEPdhYdjFnx6zQWLHLUOk';
const authorizationEndpoint = 'https://euro-2021.eu.auth0.com/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const Login = () => {
  const [name, setName] = useState(null);
  const dispatch = useAppDispatch();

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      // id_token will return a JWT token
      responseType: 'id_token',
      // retrieve the user's profile
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
        // ideally, this will be a random value
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint },
  );

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          'Authentication error',
          result.params.error_description || 'something went wrong',
        );
        return;
      }
      if (result.type === 'success') {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);
        console.log(decoded);

        const { email, name } = decoded;
        setName(name);

        dispatch(postLogin(email));

        // update redux state for the user
        // store jwt token in redux state
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      {name ? (
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/mountain/:id" component={MountainProfile} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/camera" component={CameraScreen} />
            <Route exact path="/uploadPicture" component={UploadPicture} />
          </Switch>
        </NativeRouter>
      ) : (
        <ImageBackground source={backGroundImage} style={styles.container}>
          <Header />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <CustomButton onPress={() => promptAsync({ useProxy })}>Login</CustomButton>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

export default Login;
