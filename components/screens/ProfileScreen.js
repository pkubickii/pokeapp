import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen({ route }) {
  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Text style={{ fontWeight: 'bold' }}>{route.params && route.params.name ? route.params.name : "noname"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
