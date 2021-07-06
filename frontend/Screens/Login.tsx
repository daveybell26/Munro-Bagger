import React, { useEffect } from 'react';
import {
  ImageBackground, View, Alert, Platform,
} from 'react-native';
import {
  NativeRouter, Switch, Route,
} from 'react-router-native';
import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import { postLogin, setBasicInfo, setToken } from '../store/login.store';
import { loginSelector, useAppDispatch } from '../store';
import styles from './styles/loginStyles';

import Explore from './Explore';
import Map from './Map';
import MountainProfile from './MountainProfile';
import UserProfile from './UserProfile';
import CameraScreen from './Camera';
import UploadPicture from './UploadPicture';
import RouteMap from '../Components/RouteMap';

const backGroundImage = require('../assets/background.jpg');

const auth0ClientId = 'RltSsAyBOLIi8n3NdmceMK4Sa0KvwS2R';
const authorizationEndpoint = 'https://dev-l8augku5.eu.auth0.com/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const Login = () => {
  const { basicInfo } = useSelector(loginSelector);
  const dispatch = useAppDispatch();

  const [, result, promptAsync]: any = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: auth0ClientId,
      responseType: 'id_token',
      scopes: ['openid', 'profile', 'email'],
      extraParams: {
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
        const jwtToken = result.params.id_token;
        const decoded: any = jwtDecode(jwtToken);

        dispatch(postLogin({ email: decoded.email, jwtToken }));
        dispatch(setToken(jwtToken));
        dispatch(setBasicInfo({
          email: decoded.email,
          name: decoded.name,
          image: decoded.picture,
        }));
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      {basicInfo.email ? (
        <NativeRouter>
          <Switch>
            <Route exact path="/" component={Explore} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/mountain/:id" component={MountainProfile} />
            <Route exact path="/profile" component={UserProfile} />
            <Route exact path="/camera" component={CameraScreen} />
            <Route exact path="/uploadPicture" component={UploadPicture} />
            <Route exact path="/route" component={RouteMap} />
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
