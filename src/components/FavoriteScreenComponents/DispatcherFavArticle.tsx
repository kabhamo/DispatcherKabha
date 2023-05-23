import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type DispatcherFavArticleProps = {

}
export const DispatcherFavArticle: React.FC<DispatcherFavArticleProps> = ({ }) => {
    return (
        <View style={styles.mainContainer}>
            <Text>DispatcherFavArticleScreen</Text>
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