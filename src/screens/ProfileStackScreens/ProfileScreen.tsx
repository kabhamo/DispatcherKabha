import React, { useEffect } from 'react'
import { Alert, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Feather'
import { ProfileAppBar } from '../../components/ProfileScreenComponents/ProfileAppBar'
import { ProfileNavigationProp } from '../../routes/types/navigationTypes'
import { colors } from '../../util/colors'
import { LoadingStatus, ProfileTabs } from '../../util/enums'
import { ProfileTab } from '../../util/types'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { logoutUserAndNavigate } from '../../store/user/userSlice'

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

export const ProfileScreen: React.FC<ProfileNavigationProp> = ({ navigation, route }: ProfileNavigationProp) => {
    const loadingStatus = useAppSelector(state => state.user)
    const dispatch = useAppDispatch();

    const onPressTabHandler = async ({ id, name }: ProfileTab) => {
        switch (id) {
            case ProfileTabs.Logout:
                await dispatch(logoutUserAndNavigate())
                loadingStatus.loading === LoadingStatus.Succeeded && navigation.navigate('Auth', { screen: 'Login' });
                loadingStatus.loading === LoadingStatus.Failed && Alert.alert("Failed to logout", `${loadingStatus.error.message} \n Please refresh the application`)
                break;
            case ProfileTabs.Terms:
                navigation.navigate('Terms')
                break;
            case ProfileTabs.Setting:
                navigation.navigate('Settings')
                break;
            case ProfileTabs.MyProfile:
                navigation.navigate('MyProfile')
                break;
            default:
                break;
        }

    }

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.profileContainer}>
                <ProfileAppBar onEditProfilePress={onPressTabHandler} />
            </View>
            <View style={styles.tabsContainer}>
                <ScrollView>
                    {
                        TABS.map((tab, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.tabsView}
                                onPress={() => onPressTabHandler(tab)}
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