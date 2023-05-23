import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DispatcherArticleCard } from '../components/HomeScreenComponents/DispatcherArticleCard';
import { DispatcherBar } from '../components/HomeScreenComponents/DispatcherBar';
import { DispatcherFilterBar } from '../components/HomeScreenComponents/DispatcherFilterBar';
import { HomeScreenNavigationProp } from '../routes/types/navigationTypes';
import { colors } from '../util/colors';
import { ARTICLE } from '../util/constants';

//todo Add Carousel to the artical section to render the articales
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
        <DispatcherArticleCard data={ARTICLE} />
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
    backgroundColor: colors.gray
  },
})