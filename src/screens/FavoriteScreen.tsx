import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, ScrollView } from 'react-native';
import { FavoriteScreenNavigationProp } from '../routes/types/navigationTypes';
import { colors } from '../util/colors';
import { DispatcherBar } from '../components/HomeScreenComponents/DispatcherBar';
import { DispatcherFavArticle } from '../components/FavoriteScreenComponents/DispatcherFavArticle';


export const FavoriteScreen: React.FC<FavoriteScreenNavigationProp> = ({ navigation, route }: FavoriteScreenNavigationProp) => {
    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.appBarContainer}>
                <DispatcherBar />
            </View>

            <View style={styles.favArticleContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Saved Articles</Text>
                </View>

                <View style={styles.scrollCiewContainer}>
                    <DispatcherFavArticle />
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryBlack
    },
    appBarContainer: {
        flex: 1,
        backgroundColor: colors.primaryBlack
    },
    favArticleContainer: {
        flex: 9,
        backgroundColor: colors.gray
    },
    scrollCiewContainer: {
        flex: 10,
        paddingLeft: '5%' //so the articles and the title be at the same line
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: '5%'

    },
    titleText: {
        fontSize: 22,
        textAlign: 'left',
        fontWeight: '600',
        color: colors.primaryBlack,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
})