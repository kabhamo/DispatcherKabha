import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DispatcherArticleCard } from '../components/HomeScreenComponents/DispatcherArticleCard';
import { DispatcherBar } from '../components/HomeScreenComponents/DispatcherBar';
import { DispatcherFilterBar } from '../components/HomeScreenComponents/DispatcherFilterBar';
import { useAppDispatch } from "../hooks/reduxHooks";
import { HomeScreenNavigationProp } from '../routes/types/navigationTypes';
import { getData } from '../services/asyncStorage';
import { fetchFavoriteArticles, removeFavoriteArticles } from "../state/favoriteArticles/favoriteArticlesSlice";
import { colors } from '../util/colors';
import { ARTICLES } from '../util/constants';
import { AsyncLocalStorageKeysType } from '../util/enums';
import { ArticleResponse, FavoriteArticle } from "../util/types";
import { getArticles } from "../services/articlesAPI";

const { width, height } = Dimensions.get('screen')

export const HomeScreen: React.FC<HomeScreenNavigationProp> = ({ navigation, route }: HomeScreenNavigationProp) => {
  const [articles, setArticles] = useState<ArticleResponse[] | undefined>();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<string>("");
  const dispatch = useAppDispatch();

  //call api and get articles
  useEffect(() => {
    async function getData() {
      setArticles(await getArticles())
    }
    getData();
  }, [])

  //close and open the drawer menu
  useEffect(() => {
    openDrawer && navigation.openDrawer();
    return () => setOpenDrawer(false);
  }, [openDrawer]);

  //fetch last login state from asyncStorage
  useEffect(() => {
    const getDateTime = async () => {
      const result = await getData(AsyncLocalStorageKeysType.UserAuthKey);
      setDateTime(result.lastLogin);
    }
    getDateTime()
  }, [])

  //depend on the icon state fetch favoriteArticle or remove from firestore
  const onStarClick = async (favoriteArticle: FavoriteArticle, isFavoriteArticle: boolean) => {
    isFavoriteArticle ? await dispatch(removeFavoriteArticles(favoriteArticle.id)).unwrap() :
      await dispatch(fetchFavoriteArticles(favoriteArticle)).unwrap()
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
        <FlashList
          data={articles}
          renderItem={({ item, index }) =>
            <DispatcherArticleCard
              key={index}
              data={item}
              index={index}
              onStarClick={onStarClick}
            />
          }
          estimatedItemSize={height}
        />
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
  }
})