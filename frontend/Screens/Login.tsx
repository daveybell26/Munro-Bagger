import React, { useState } from 'react';
import {
  SafeAreaView, Text, Button, StyleSheet, TextInput, ImageBackground,
} from 'react-native';
import { useHistory } from 'react-router-native';
import Header from '../Components/Header';

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
});

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');

  const changeHandler = (val) => {
    setEmail(val);
  };

  const submitHandler = (email) => {
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
      <Button onPress={() => submitHandler(email)} title="Login" />
    </SafeAreaView>

  );
};
export default Login;
