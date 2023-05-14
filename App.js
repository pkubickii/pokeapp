import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import { Button, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={styles.navigator}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: "Pokemon App",
          headerRight: () => (
            <Button title="go" onPress={() => alert("GO GO GO!")} />
          ),
          headerShown: false,
        }} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={({ route }) => ({ title: route.params.name })} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navigator: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});
