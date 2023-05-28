import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DispatcherArticleCard } from '../components/HomeScreenComponents/DispatcherArticleCard';
import { DispatcherBar } from '../components/HomeScreenComponents/DispatcherBar';
import { DispatcherFilterBar } from '../components/HomeScreenComponents/DispatcherFilterBar';
import { useAppDispatch } from "../hooks/reduxHooks";
import { HomeScreenNavigationProp } from '../routes/types/navigationTypes';
import { getData } from '../services/asyncStorage';
import { fetchFavoriteArticles } from "../state/favoriteNews/favoriteNewsSlice";
import { colors } from '../util/colors';
import { ARTICLES } from '../util/constants';
import { AsyncLocalStorageKeysType } from '../util/enums';
import { FavoriteArticle } from "../util/types";

//todo Add the star(Favorite) logic and styles
const { width, height } = Dimensions.get('screen')
export const HomeScreen: React.FC<HomeScreenNavigationProp> = ({ navigation, route }: HomeScreenNavigationProp) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [dateTime, setDateTime] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    openDrawer && navigation.openDrawer();
    return () => setOpenDrawer(false);
  }, [openDrawer]);

  useEffect(() => {
    const getDateTime = async () => {
      const result = await getData(AsyncLocalStorageKeysType.UserAuthKey);
      setDateTime(result.lastLogin);
    }
    getDateTime()
  }, [])

  const onStarClick = async (favoriteArticle: FavoriteArticle) => {
    await dispatch(fetchFavoriteArticles(favoriteArticle))
  }

  return (
    <SafeAreaView style={styles.mainContainer}>

      <View style={styles.appBarContainer}>
        <DispatcherBar />
        <DispatcherFilterBar setOpenDrawer={setOpenDrawer} />
      </View>

      <View style={styles.articleContainer}>
        <Text style={styles.lastLogin}>
          Last Login:
          <Text style={styles.dateTime}>{` ${dateTime}`}</Text>
        </Text>
        <Text style={styles.topTitle}>Top Headlines in UK</Text>
        <FlashList
          data={ARTICLES}
          renderItem={({ item, index }) => <DispatcherArticleCard key={index} data={item} onStarClick={onStarClick} />}
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