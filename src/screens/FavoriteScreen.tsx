import React, { useEffect } from 'react';
import { Dimensions, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DispatcherFavArticleCard } from '../components/FavoriteScreenComponents/DispatcherFavArticleCard';
import { DispatcherBar } from '../components/HomeScreenComponents/DispatcherBar';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { FavoriteScreenNavigationProp } from '../routes/types/navigationTypes';
import { getFavoriteArticles } from '../state/favoriteNews/favoriteNewsSlice';
import { colors } from '../util/colors';
import type { FavoriteArticle } from '../util/types';

const FAVARTICLE: FavoriteArticle[] = [
    {
        id: 0,
        title: "Spanish football chief admits racism problem after Vinícius Júnior abuse - The Guardian",
        urlToImage: "https://i.guim.co.uk/img/media/aa1cb5ea7d2738d70f1721a4897b488c453933a4/0_89_5000_2999/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=401ae3554c59771835168deab79830af",
        publishedAt: null
    },
    {
        id: 0,
        title: "NBA playoffs: Celtics-Heat Game 4 live updates, scores, lineups, injury report, how to watch, TV channel - Yahoo Sports",
        urlToImage: "https://s.yimg.com/ny/api/res/1.2/ioo8sNDkvAMtslMs3kMDzA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-05/c747d500-f9af-11ed-bf2f-75837ac956c5",
        publishedAt: null
    }
]

const { width, height } = Dimensions.get('screen');

export const FavoriteScreen: React.FC<FavoriteScreenNavigationProp> = ({ navigation, route }: FavoriteScreenNavigationProp) => {
    const favoriteArticles = useAppSelector(state => state.favoriteArticles.value)
    const dispatch = useAppDispatch();

    //When login to the app we need to retrive the data - (redux live in memory)
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