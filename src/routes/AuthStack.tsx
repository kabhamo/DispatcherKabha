import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import { colors } from '../util/colors';
import { AuthParamList } from './paramsList/AuthParamList';

const Stack = createNativeStackNavigator<AuthParamList>();

type AuthStackProps = {}

export const AuthStack: React.FC<AuthStackProps> = ({ }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Signup"
                screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
