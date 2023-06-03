import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { colors } from '../../util/colors';

type CustomDrawerContentProps = {
    props: DrawerContentComponentProps
}

type DrawerItemType = {
    label: string,
}

const drawerItems: DrawerItemType[] = [

]

export const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ props }) => {
    return (
        <DrawerContentScrollView {...props}>

            <View style={{ padding: 30 }}>
                <Text style={styles.title}>FILTER</Text>
            </View>

            <View style={styles.drawerItemsContainer}>
                <DrawerItem
                    style={styles.drawerItem}
                    labelStyle={{ fontSize: 17 }}
                    label="HomeScreen"
                    onPress={() => console.log("testing")}
                />
                <Text style={styles.drawerStateText}>All</Text>
            </View>

            <View style={styles.line}></View>

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: '500',
        color: colors.primaryBlackThree,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    drawerItemsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
    },
    drawerItem: {
        flex: 4,
    },
    drawerStateText: {
        flex: 1,
    },
    line: {
        backgroundColor: colors.gray,
        width: '100%',
        height: 2,
        marginTop: '3%',
    },
})