import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Camera from 'expo-camera';

function App() {
  const [permission, askForPermission] = usePermissions(Permissions.CAMERA, { ask: true });

  if (!permission || permission.status !== 'granted') {
    return (
      <View>
        <Text>Permission is not granted</Text>
        <TouchableOpacity onPress={askForPermission} />
      </View>
    );
  }

  return (
    <View>
      <Camera />
    </View>
  );
}
