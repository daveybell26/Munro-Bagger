import React, { useEffect } from 'react';
import {
  ImageBackground, View, Alert, Platform, Image,
} from 'react-native';
import { Text } from 'react-native-elements';
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
const munroeIcon = require('../assets/pngtree-mountain-vector-icon-isolated-on-white-background-image_228214.jpeg');

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
      prompt: AuthSession.Prompt.Login,
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
          <Header isProfile={false} />
          <View style={{
            flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', padding: 25, justifyContent: 'space-around', alignItems: 'center',
          }}
          >
            <View>
              <Text h2 style={styles.textHeader}>
                Are you a TRUE Munro Bagger?
              </Text>
            </View>
            <View>
              <Image
                source={munroeIcon}
                style={{
                  width: 150, height: 150, borderRadius: 100,
                }}
              />
            </View>
            <View>
              <Text style={styles.textDescription}>
                Share, discover and conquer the challenge of climbing every munro in Scotland.

              </Text>
              <Text style={styles.textDescription}>
                {'\n'}
                Are you ready?
              </Text>
            </View>
            <View>
              <CustomButton onPress={() => promptAsync({ useProxy })}>Login / SignUp</CustomButton>
            </View>
          </View>
        </ImageBackground>
      )}
    </View>
  );
};

export default Login;
