import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type ProfileScreenProps = {

}
export const ProfileScreen: React.FC<ProfileScreenProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>ProfileScreenScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})