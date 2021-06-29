import React from 'react';
import {
  SafeAreaView, Text, StyleSheet, TextInput, ImageBackground,
} from 'react-native';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import NavFooter from '../Components/NavFooter';
import Header from '../Components/Header';

const styles = StyleSheet.create({
  title: {
    marginTop: '20%',
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

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
<<<<<<< HEAD
  <SafeAreaView style={styles.container}>
    <Text>Login Screen</Text>
    <Text> Enter E-mail</Text>
    <TextInput
      style={styles.emailInput}
      placeholder="example@google.com"
    />
=======
  <SafeAreaView style={{ flex: 1 }}>
    <Header />
    <Text style={styles.title}>Login Screen</Text>
>>>>>>> main
    <NavFooter />
  </SafeAreaView>
);

export default Login;
