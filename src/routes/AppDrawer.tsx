import { View, Text, StyleSheet } from 'react-native'
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ProfileDrawerParamList } from './paramsList/AppDrawerList';
//import { ProfileScreen } from '../screens/ProfileScreen';

type AppDrawerProps = {}

const Drawer = createDrawerNavigator<ProfileDrawerParamList>();

const TestDrawer = ({ }) => {
    return (
        <View>
            <Text>TestDrawer</Text>
        </View>
    )
}
const ProfileEmpty = ({ }) => {
    return (
        <View>
        </View>
    )
}

export const AppDrawer: React.FC<AppDrawerProps> = ({ }) => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, }}>
            <Drawer.Screen name="Profile" component={ProfileEmpty} />
            <Drawer.Screen name="Settings" component={TestDrawer} />
            <Drawer.Screen name="Terms" component={TestDrawer} />
            <Drawer.Screen name="Logout" component={TestDrawer} />
        </Drawer.Navigator>
    );
}