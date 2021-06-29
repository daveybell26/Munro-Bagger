import React, { useState } from 'react';
import {
  SafeAreaView, Text, StyleSheet, TextInput,
} from 'react-native';
import { useHistory } from 'react-router-native';
import Header from '../Components/Header';
import CustomButton from '../Components/customButton';

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
  },
  loginButton: {
    width: '50%',
    backgroundColor: '#427AA1',
  },
});
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const changeHandler = (val: string) => {
    setEmail(val);
  };

  const submitHandler = (email: string) => {
    history.push('/explore');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text> Enter E-mail</Text>
      <TextInput
        style={styles.emailInput}
        placeholder="example@google.com"
        onChangeText={changeHandler}
      />
      <CustomButton text="login" onPress={submitHandler} />
    </SafeAreaView>

  );
};
export default Login;
