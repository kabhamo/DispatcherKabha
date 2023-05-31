import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type MyProfileScreenProps = {

}
export const MyProfileScreen: React.FC<MyProfileScreenProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>MyProfileScreenScreen</Text>
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