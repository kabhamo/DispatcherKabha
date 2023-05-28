import React, { useEffect } from 'react';
import { Dimensions, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DispatcherFavArticleCard } from '../components/FavoriteScreenComponents/DispatcherFavArticleCard';
import { DispatcherBar } from '../components/HomeScreenComponents/DispatcherBar';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { FavoriteScreenNavigationProp } from '../routes/types/navigationTypes';
import { getFavoriteArticles } from '../state/favoriteArticles/favoriteArticlesSlice';
import { colors } from '../util/colors';

const { width, height } = Dimensions.get('screen');

export const FavoriteScreen: React.FC<FavoriteScreenNavigationProp> = ({ navigation, route }: FavoriteScreenNavigationProp) => {
    const favoriteArticles = useAppSelector(state => state.favoriteArticles.value)
    const dispatch = useAppDispatch();

    //When login and open favorite screen it is needed to retrive the data
    //redux live in memory which will be deleted after closing the app
    useEffect(() => {
        const dispatchStateData = async () => {
            await dispatch(getFavoriteArticles()).unwrap()
        }
        dispatchStateData()
            .catch((ex) => console.log(ex))
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>

            <View style={styles.appBarContainer}>
                <DispatcherBar />
            </View>

            <View style={styles.favArticleContainer}>

                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>Saved Articles</Text>
                </View>

                <View style={styles.scrollViewContainer}>
                    {favoriteArticles.length > 0 ? <ScrollView>
                        {favoriteArticles.map((article, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => console.log("Fav Article, Navigate to Article")}
                                style={styles.scrollViewItemContainer}>
                                <DispatcherFavArticleCard key={index} data={article} />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                        //todo add styles
                        : <Text adjustsFontSizeToFit numberOfLines={1} style={styles.emptyText}>You don't have any favorite articles yet!</Text>}
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
        //flex: 1, //disable to adjusted with HS's AppBar height
        height: height * 0.07,
        backgroundColor: colors.primaryBlack
    },
    favArticleContainer: {
        flex: 9,
        backgroundColor: colors.white
    },
    scrollViewContainer: {
        flex: 10,
        margin: '4%',
    },
    scrollViewItemContainer: {
        marginVertical: '2%',
        height: height * 0.14
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: '4%',
        marginVertical: 0,
    },
    titleText: {
        fontSize: 22,
        textAlign: 'left',
        fontWeight: '600',
        color: colors.primaryBlack,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    },
    emptyText: {
        fontSize: 20,
        color: colors.grayDark,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: '10%'
    }
})