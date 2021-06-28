import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index';
import Counter from './components/counter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App () {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <Text>Open up App.tsx to start working on your app!!!</Text>
        <StatusBar />
      </View>
    </Provider>
  );
}
