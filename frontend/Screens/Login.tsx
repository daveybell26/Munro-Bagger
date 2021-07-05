import React, { useState, useEffect } from 'react';
import {
  StyleSheet, ImageBackground, View, Alert, Button, Platform,
} from 'react-native';
import { useHistory } from 'react-router-native';
import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import { postLogin } from '../store/login.store';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF2FA',
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#427AA1',
    width: 200,
    margin: 10,
    padding: 8,
    backgroundColor: 'white',
  },
});

const backGroundImage = require('../assets/background.jpg');

const auth0ClientId = 'RltSsAyBOLIi8n3NdmceMK4Sa0KvwS2R';
const authorizationEndpoint = 'https://dev-l8augku5.eu.auth0.com/authorize';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

const Login = () => {
  const history = useHistory();
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

  React.useEffect(() => {
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

        const user = postLogin(decoded.email);

        // update redux state for the user
        // store jwt token in redux state

      }
    }
  }, [result]);
  // useEffect(() => {
  //   if (name) history.push('/explore');
  // }, []);

  return (
    <ImageBackground source={backGroundImage} style={styles.container}>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CustomButton disabled={!request} onPress={promptAsync}>Login</CustomButton>
      </View>
    </ImageBackground>

  );
};

export default Login;
