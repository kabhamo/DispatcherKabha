import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type SettingsScreenProps = {

}
export const SettingsScreen: React.FC<SettingsScreenProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>SettingsScreenScreen</Text>
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