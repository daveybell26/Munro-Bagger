import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { StyleSheet, TextInput, ImageBackground } from 'react-native';
import { useHistory } from 'react-router-native';
import Header from '../Components/Header';
import CustomButton from '../Components/customButton';
import { postLogin } from '../store/login.store';

const backGroundImage = require('../assets/background.jpg');

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emailInput: {
    borderWidth: 1,
    borderColor: '#427AA1',
    width: 200,
    margin: 10,
    padding: 8,
    backgroundColor: 'white',
=======
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    flex: 1,
    marginTop: '20%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
>>>>>>> main
  },
});
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const userDetails = useSelector((state: any) => state.login.userDetails);

  const changeHandler = (val: string) => {
    setEmail(val);
  };
  console.log('userDetails line 36', userDetails);

  const submitHandler = () => {
    console.log('firing');
    dispatch(postLogin());
    setEmail('');
    history.push('/explore');
  };

<<<<<<< HEAD
  return (
    <ImageBackground source={backGroundImage} style={styles.container}>
      <Header />
      <TextInput
        style={styles.emailInput}
        placeholder="example@google.com"
        onChangeText={changeHandler}
      />
      <CustomButton text="login" onPress={submitHandler} />
    </ImageBackground>
=======
const Login = () => (
  <SafeAreaView style={styles.safeArea}>
    <Header />
    <Text style={styles.title}>Login Screen</Text>
    <NavFooter />
  </SafeAreaView>
);
>>>>>>> main

  );
};
export default Login;
