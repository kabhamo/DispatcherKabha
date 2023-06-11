import { FlashList } from "@shopify/flash-list";
import Lottie from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DispatcherArticleCard } from '../../components/HomeScreenComponents/DispatcherArticleCard';
import { DispatcherBar } from '../../components/HomeScreenComponents/DispatcherBar';
import { DispatcherFilterBar } from '../../components/HomeScreenComponents/DispatcherFilterBar';
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import type { HomeScreenNavigationProp } from '../../routes/types/navigationTypes';
import { getArticles } from "../../services/articlesAPI";
import { getLocalData, storeLocalData } from '../../services/asyncStorage';
import { fetchFavoriteArticles, removeFavoriteArticles } from "../../store/favoriteArticles/favoriteArticlesSlice";
import { colors } from '../../util/colors';
import { AsyncLocalStorageKeysType } from '../../util/enums';
import type { Article, FavoriteArticle } from "../../util/types";

const { width, height } = Dimensions.get('screen')

export const HomeScreen: React.FC<HomeScreenNavigationProp> = ({ navigation, route }: HomeScreenNavigationProp) => {
  const [articles, setArticles] = useState<Article[] | undefined>();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.user)



  //retrive the articles from device local storage
  useEffect(() => {
    async function getData() {
      try {
        // Loading on
        setLoading(true);
        // Try fetching articles from API
        const articles = await getArticles()
        // If it works, then save to local storage
        if (articles && articles.length !== 0) {
          //store the data in local storage
          await storeLocalData(AsyncLocalStorageKeysType.ArticlesKey, articles)
        }
      } catch (ex) {
        console.log("error getArticles: ", ex);
        setLoading(false);
      } finally {
        // FINALLY, return articles from local storage.
        setArticles(await getLocalData(AsyncLocalStorageKeysType.ArticlesKey));
        setLoading(false);
      }
    }
    getData();
  }, [])

  //close and open the drawer menu
  useEffect(() => {
    openDrawer && navigation.openDrawer();
    return () => setOpenDrawer(false);
  }, [openDrawer]);

  //fetch last login state from device local storage
  useEffect(() => {
    const getDateTime = async () => {
      const result = await getLocalData(AsyncLocalStorageKeysType.UserAuthKey);
      setDateTime(result?.lastLogin ? result.lastLogin : new Date().toUTCString());
    }
    getDateTime()
  }, [])

  //depend on the icon state fetch favoriteArticle or remove from firestore
  const onStarClick = async (favoriteArticle: FavoriteArticle, isFavoriteArticle: boolean) => {
    isFavoriteArticle ? await dispatch(removeFavoriteArticles(favoriteArticle.id)).unwrap() :
      await dispatch(fetchFavoriteArticles(favoriteArticle)).unwrap()
  }

  //navigate to the clicked article 
  const onPressArticle = (artical: Article) => {
    navigation.navigate('Artical', { article: artical })
  }

  return (
    <SafeAreaView style={styles.mainContainer}>

      <View style={styles.appBarContainer}>
        <DispatcherBar />
        <DispatcherFilterBar setOpenDrawer={setOpenDrawer} />
      </View>

      <View style={{ backgroundColor: colors.white }}>
        <View style={styles.textsContainer}>
          <Text style={styles.lastLogin}>
            Last Login:
            <Text style={styles.dateTime}>{` ${dateTime}`}</Text>
          </Text>
          <Text style={styles.topTitle}>Top Headlines in UK</Text>
        </View>
      </View>

      <View style={styles.articleContainer}>
        {loading &&
          <Lottie source={require('../../assets/jsons/loadingActivity.json')} autoPlay loop />}
        {articles ?
          <FlashList
            data={articles}
            renderItem={({ item, index }) =>
              <DispatcherArticleCard
                key={index}
                data={item}
                index={index}
                onStarClick={onStarClick}
                onPress={onPressArticle}
              />
            }
            estimatedItemSize={height}
          />
          :
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.errorText}>Error with retriving articles</Text>
        }
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
  },
  articleContainer: {
    flex: 5,
    backgroundColor: colors.white
  },
  textsContainer: {
    borderRadius: 5,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: colors.gray,
    backgroundColor: colors.white,
  },
  topTitle: {
    paddingLeft: '5%',
    paddingVertical: '2%',
    color: colors.primaryBlack,
    textAlign: 'left',
    fontSize: 25,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontWeight: "700",
  },
  lastLogin: {
    paddingVertical: '2%',
    paddingLeft: '5%',
    color: colors.primaryBlackThree,
    textAlign: 'left',
    fontSize: 17,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Arial',
    fontWeight: "500",
  },
  dateTime: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "500",
    color: colors.primaryBlackTwo,
  },
  errorText: {
    fontSize: 20,
    color: colors.grayDark,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '10%'
  }
})