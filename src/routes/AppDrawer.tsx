import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import AppTabs from './AppTabs';
import { CustomDrawerContent } from './CustomDrawerItems/CustomDrawerContent';
import { DrawerParamList } from './types/navigationTypes';

const Drawer = createDrawerNavigator<DrawerParamList>();


function AppDrawer(): JSX.Element {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false, drawerPosition: 'right' }}
            drawerContent={(props) => <CustomDrawerContent props={props} />}
        >
            <Drawer.Screen name="SearchIn" options={{ title: "Home", }} component={AppTabs} />
        </Drawer.Navigator>
    );
}

export default AppDrawer;