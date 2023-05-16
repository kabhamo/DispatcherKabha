import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AppDrawer } from '../routes/AppDrawer'
import { colors } from '../util/colors'

type ProfileScreenProps = {}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({ }) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity ></TouchableOpacity>
            {isDrawerOpen ? <AppDrawer /> :
                <Text>ProfileScreenScreen</Text>
            }
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