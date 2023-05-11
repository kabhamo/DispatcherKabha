import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type FavoriteScreenProps = {

}
export const FavoriteScreen: React.FC<FavoriteScreenProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>FavoriteScreenScreen</Text>
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