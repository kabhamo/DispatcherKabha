import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Platform } from 'react-native'
import { ProfileScreenNavigationProp } from '../routes/types/navigationTypes'
import { colors } from '../util/colors'
import { ProfileAppBar } from '../components/ProfileScreenComponents/ProfileAppBar'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather';
import { ProfileTab } from '../util/types'

type ProfileScreenProps = {}

const TABS: ProfileTab[] = [
    {
        id: 1,
        name: "Settings",
        icon: <Icon name="settings" size={32} color={colors.primaryBlack} />
    },
    {
        id: 2,
        name: "Terms & Privacy",
        icon: <Icon name="file-text" size={32} color={colors.primaryBlack} />
    },
    {
        id: 3,
        name: "Logout",
        icon: <Icon name="log-out" size={32} color={colors.primaryBlack} />
    }
]

export const ProfileScreen: React.FC<ProfileScreenNavigationProp> = ({ navigation, route }: ProfileScreenNavigationProp) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    useEffect(() => {

    }, [isDrawerOpen])
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.profileContainer}>
                <ProfileAppBar />
            </View>
            <View style={styles.tabsContainer}>
                <ScrollView>
                    {
                        TABS.map((tab, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.tabsView}
                                onPress={() => console.log(`Navigate to ${tab.name}`)}
                            >
                                {tab.icon}
                                <Text style={styles.tabsText}>{tab.name}</Text>
                            </TouchableOpacity>
                        ))}
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.primaryBlack
    },
    profileContainer: {
        flex: 1,
    },
    tabsContainer: {
        flex: 8,
        backgroundColor: colors.white,
    },
    tabsView: {
        height: '25%',
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 10,
    },
    tabsText: {
        fontSize: 18,
        textAlign: 'left',
        fontWeight: '500',
        color: colors.primaryBlackThree,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },

})