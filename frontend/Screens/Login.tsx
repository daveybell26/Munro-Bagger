import React from 'react';
import {
  SafeAreaView, Text, StyleSheet, TextInput, ImageBackground,
} from 'react-native';
import NavFooter from '../Components/NavFooter';

const image = {};

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

const Login = () => (
  <SafeAreaView style={styles.container}>
    <Text>Login Screen</Text>
    <Text> Enter E-mail</Text>
    <TextInput
      style={styles.emailInput}
      placeholder="example@google.com"
    />
    <NavFooter />
  </SafeAreaView>
);

export default Login;
