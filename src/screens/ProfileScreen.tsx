import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProfileScreenNavigationProp } from '../routes/types/navigationTypes'
import { colors } from '../util/colors'

type ProfileScreenProps = {}

export const ProfileScreen: React.FC<ProfileScreenNavigationProp> = ({ navigation, route }: ProfileScreenNavigationProp) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

    useEffect(() => {

    }, [isDrawerOpen])
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity ></TouchableOpacity>
            {/*{isDrawerOpen ? <AppDrawer /> :
                <Text>ProfileScreenScreen</Text>
            }*/}
            <Text>ProfileScreenScreen</Text>
            {/*<AppDrawer />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryBlackTwo
    },
})