import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import store from './store/index';
import Login from './Screens/Login';

export default function App () {
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: '#427AA1' }}>
        <Provider store={store}>
          <Login />
        </Provider>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
