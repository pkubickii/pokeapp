import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function PokemonGalleryScreen() {
  return (
    <View style={styles.container}>
      <Text>Pokemon</Text>
      <Text style={{ fontWeight: 'bold' }}>GALLERY</Text>
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
