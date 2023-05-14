import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokemonScreen from './PokemonScreen';
import PokemonGalleryScreen from './PokemonGalleryScreen';

const Tab = createBottomTabNavigator();
export default function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile', { name: "Fernando" })} />
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Pokemon" component={PokemonScreen} />
        <Tab.Screen name="PokemonGallery" component={PokemonGalleryScreen} />
      </Tab.Navigator>
    </>
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
