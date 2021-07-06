import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles/customButtonStyles';

const CustomButton = ({ onPress, children }: any) => (
  <TouchableOpacity onPress={onPress}>
    <SafeAreaView style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </SafeAreaView>
  </TouchableOpacity>
);

export default CustomButton;
