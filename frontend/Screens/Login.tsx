import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
  ImageBackground, TextInput, View,
} from 'react-native';
import { useHistory } from 'react-router-native';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import { postLogin } from '../store/login.store';
import { loginSelector, useAppDispatch } from '../store';
import styles from './styles/loginStyles';

const backGroundImage = require('../assets/background.jpg');

const Login = () => {
  const [email, setEmail] = useState('');
  const { userDetails } = useSelector(loginSelector);

  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userDetails.id) history.push('/explore');
  }, [userDetails]);

  const changeHandler = (val: string) => setEmail(val);

  const submitHandler = () => dispatch(postLogin(email));

  return (
    <ImageBackground source={backGroundImage} style={styles.container}>
      <Header />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={styles.emailInput}
          keyboardType="email-address"
          placeholder="user@example.com"
          onChangeText={changeHandler}
        />
        <CustomButton onPress={submitHandler}>Login</CustomButton>
      </View>
    </ImageBackground>

  );
};

export default Login;
