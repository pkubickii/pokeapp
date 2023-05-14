import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>App made by:</Text>
      <Text style={{ fontWeight: 'bold' }}>Przemysław Kubicki</Text>
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
