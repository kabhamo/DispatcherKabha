import { View, Text } from 'react-native'
import React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import AppTabs from './AppTabs';
import { DrawerParamList } from './types/navigationTypes';
//import Icon from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator<DrawerParamList>();

function TestDrawer() {
    return (
        <View>
            <Text>Drawer1</Text>
        </View>
    )
}
function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            {/* SafeView */}
            {/*<DrawerItemList {...props} />*/}
            <DrawerItem icon={() => { return <Icon color={'red'} size={12} name={'heart'} /> }}
                label="HomeScreen" onPress={() => console.log("asd")} />
        </DrawerContentScrollView>
    );
}


function AppDrawer(): JSX.Element {
    return (
        <Drawer.Navigator
            screenOptions={{ headerShown: false, drawerPosition: 'right' }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="SearchIn" options={{ title: "Home", }} component={AppTabs} />
            <Drawer.Screen name="Sources" component={TestDrawer} />
            {/* Inner Drawer */}
            <Drawer.Screen name="Language" component={TestDrawer} />
            <Drawer.Screen name="Dates" component={TestDrawer} />
        </Drawer.Navigator>
    );
}

export default AppDrawer;