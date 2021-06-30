import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { StyleSheet, TextInput, ImageBackground } from 'react-native';
import { useHistory } from 'react-router-native';
import Header from '../Components/Header';
import CustomButton from '../Components/customButton';
import { postLogin } from '../store/login.store';

const backGroundImage = require('../assets/background.jpg');

const styles = StyleSheet.create({
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
  },
});
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const userDetails = useSelector((state: any) => state.login.userDetails);
  console.log('here', userDetails);

  const changeHandler = (val: string) => {
    setEmail(val);
  };

  const submitHandler = () => {
    dispatch(postLogin(email));
    setEmail('');
    // history.push('/explore');
  };

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

  );
};
export default Login;
