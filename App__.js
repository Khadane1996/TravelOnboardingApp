import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screen 
import { OnBoarding } from './app/screens';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
    <Stack.navigator>
     <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerShown: false }} />
    </Stack.navigator>
    </NavigationContainer>
    


    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;