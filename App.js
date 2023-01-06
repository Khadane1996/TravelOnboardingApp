import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen 
import { OnBoarding } from './app/screens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
  ); 
}


