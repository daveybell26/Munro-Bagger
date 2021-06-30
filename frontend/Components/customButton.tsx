import React from 'react';
import {
  StyleSheet, Text, SafeAreaView, TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#427AA1',
    width: 200,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});

const CustomButton = ({ onPress, children }: any) => (
  <TouchableOpacity onPress={onPress}>
    <SafeAreaView style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </SafeAreaView>
  </TouchableOpacity>
);

export default CustomButton;
