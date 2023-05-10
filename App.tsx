/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import { colors } from './src/util/colors';

type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{ contentStyle: { backgroundColor: colors.white } }}>
        <Stack.Screen name="Login" options={{ headerShown: false, }} component={LoginScreen} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} component={SignupScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
