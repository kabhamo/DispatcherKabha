import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthStackSreens/LoginScreen';
import SignupScreen from '../screens/AuthStackSreens/SignupScreen';
import { colors } from '../util/colors';
import { AuthParamList } from './types/navigationTypes';

const Stack = createNativeStackNavigator<AuthParamList>();

function AuthStack(): JSX.Element {
    return (
        <Stack.Navigator
            initialRouteName="Signup"
            screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.white } }}>
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default AuthStack;
