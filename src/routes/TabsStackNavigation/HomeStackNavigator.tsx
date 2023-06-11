import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ArticalScreen } from '../../screens/HomeStackScreens/ArticalScreen';
import { HomeScreen } from '../../screens/HomeStackScreens/HomeScreen';
import type { HomeStackParamList } from '../types/navigationTypes';
import type { Article } from '../../util/types';
import { colors } from '../../util/colors';

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function HomeStackNavigator(): JSX.Element {

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }} />
            <HomeStack.Screen
                name='Artical'
                component={ArticalScreen}
                options={{
                    title: "",
                    headerTintColor: colors.white,
                    headerStyle: { backgroundColor: colors.primaryBlack }
                }}
                initialParams={{ article: undefined }} />
        </HomeStack.Navigator>
    );
}

export default HomeStackNavigator
