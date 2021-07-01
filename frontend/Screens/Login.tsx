import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, TextInput, ImageBackground, View,
} from 'react-native';
import { useHistory } from 'react-router-native';
import Header from '../Components/Header';
import CustomButton from '../Components/CustomButton';
import { postLogin } from '../store/login.store';

const backGroundImage = require('../assets/background.jpg');

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

const Login = () => {
  const [email, setEmail] = useState('');
  const userDetails = useSelector((state: any) => state.login.userDetails);

  const history = useHistory();
  const dispatch = useDispatch();

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
