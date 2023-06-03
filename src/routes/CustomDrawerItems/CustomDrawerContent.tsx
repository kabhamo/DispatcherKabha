import { View, Text, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { colors } from '../../util/colors';

type CustomDrawerContentProps = {
    props: DrawerContentComponentProps
}

enum SourcesDrawerOptionsEnum {
    CBS = 'CBS',
    NBC = 'NBC',
    Ynet = 'Ynet'
}

enum LanguageDrawerOptionsEnum {
    EN = 'english',
    AR = 'arabic',
    HE = 'hebrew'
}

type DrawerItemType = {
    label: string,
}

type DrawerListItem = {
    drawer: DrawerItemType
    drawerOptions: SourcesDrawerOptionsEnum[] | LanguageDrawerOptionsEnum[]
}

const drawerItemsContent: DrawerListItem[] = [
    {
        drawer: { label: 'Sources' },
        drawerOptions: [
            SourcesDrawerOptionsEnum.CBS,
            SourcesDrawerOptionsEnum.NBC,
            SourcesDrawerOptionsEnum.Ynet
        ]
    },
    {
        drawer: { label: 'Language' },
        drawerOptions: [
            LanguageDrawerOptionsEnum.AR,
            LanguageDrawerOptionsEnum.EN,
            LanguageDrawerOptionsEnum.HE
        ]
    }
]


const drawerItems: DrawerItemType[] = [
    {
        label: 'Search in',
    },
    {
        label: 'Sources',
    },
    {
        label: 'Language'
    },
    {
        label: 'Dates'
    },
]

const DrawerItemComponent: React.FC<{ item: DrawerListItem }> = ({ item }) => {
    const [showOptions, setShowOptions] = useState<boolean>(true);

    return (
        <>
            <View style={styles.drawerItemsContainer}>
                {showOptions ?
                    <>
                        <DrawerItem
                            style={styles.drawerItem}
                            labelStyle={{ fontSize: 17 }}
                            label={item.drawer.label}
                            onPress={() => setShowOptions(!showOptions)}
                        />
                        <Text
                            adjustsFontSizeToFit
                            numberOfLines={1}
                            style={styles.drawerStateText}
                        >
                            {item.drawer.label === 'Search in' ? 'Everything' : 'All'}
                        </Text>
                    </>
                    :
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        {item.drawerOptions.map((option, index) => (
                            <>
                                <DrawerItem
                                    style={styles.drawerItem}
                                    labelStyle={{ fontSize: 17 }}
                                    label={option}
                                    onPress={() => setShowOptions(!showOptions)}
                                />
                            </>

                        ))}
                    </View>
                }


            </View>
            <View style={styles.line}></View>
        </>

    );
}

export const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ props }) => {
    const [change, setChange] = useState<boolean>(false);

    const test = ['one', 'two', 'three']

    return (
        <DrawerContentScrollView {...props}>

            <View style={{ padding: 30 }}>
                <Text style={styles.title}>FILTER</Text>
            </View>

            {drawerItemsContent.map((item, index) => (
                <View key={index}>
                    <DrawerItemComponent item={item} />
                </View>
            ))}

        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
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
        flex: 5,
    },
    drawerStateText: {
        flex: 2,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: '500',
        color: colors.grayDark,
        opacity: 0.8,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    line: {
        backgroundColor: colors.gray,
        width: '100%',
        height: 2,
        marginTop: '3%',
    },
})