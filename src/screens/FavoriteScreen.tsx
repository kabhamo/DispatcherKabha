import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FavoriteScreenNavigationProp } from '../routes/types/navigationTypes';


export const FavoriteScreen: React.FC<FavoriteScreenNavigationProp> = ({ navigation, route }: FavoriteScreenNavigationProp) => {
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