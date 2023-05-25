import React, { useEffect, useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DispatcherArticleCard } from '../components/HomeScreenComponents/DispatcherArticleCard';
import { DispatcherBar } from '../components/HomeScreenComponents/DispatcherBar';
import { DispatcherFilterBar } from '../components/HomeScreenComponents/DispatcherFilterBar';
import { HomeScreenNavigationProp } from '../routes/types/navigationTypes';
import { colors } from '../util/colors';
import { ARTICLES } from '../util/constants';
import { FlashList } from "@shopify/flash-list";

//todo Add Carousel to the artical section to render the articles
//todo Add the star(Favorite) logic and styles
const { width, height } = Dimensions.get('screen')
export const HomeScreen: React.FC<HomeScreenNavigationProp> = ({ navigation, route }: HomeScreenNavigationProp) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  useEffect(() => {
    openDrawer && navigation.openDrawer();
    return () => setOpenDrawer(false); //! it works but is it the right way?
  }, [openDrawer]);

  return (
    <SafeAreaView style={styles.mainContainer}>

      <View style={styles.appBarContainer}>
        <DispatcherBar />
        <DispatcherFilterBar setOpenDrawer={setOpenDrawer} />
      </View>

      <View style={styles.articleContainer}>
        <Text>Last Login</Text>
        <Text>Top Headlines in UK</Text>
        {/*<DispatcherArticleCard data={ARTICLE} />*/}
        <FlashList
          data={ARTICLES}
          renderItem={({ item, index }) => <DispatcherArticleCard key={index} data={item} />}
          estimatedItemSize={width * 0.7}
        />
      </View>

    </SafeAreaView>

  );
}

//ARTICLES.map((article, index) => (
//  <DispatcherArticleCard data={article} />
//))

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
})